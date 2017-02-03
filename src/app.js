// import libraries
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const url = require('url');
const csrf = require('csurf');
const socketServer = require('./server.js');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/LynxTag';

let expressServer = {};

mongoose.connect(dbURL, (err) => {
  if (err) {
    console.log('Could not connect to database');
    throw err;
  }
});

let redisURL = {
  hostname: 'localhost',
  port: 6379,
};

let redisPASS;

if (process.env.REDISCLOUD_URL) {
  redisURL = url.parse(process.env.REDISCLOUD_URL);
  redisPASS = redisURL.auth.split(':')[1];
}
// pull in routes
const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// create express app
const app = express();
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(session({
  key: 'sessionid',
  store: new RedisStore({
    host: redisURL.hostname,
    port: redisURL.port,
    pass: redisPASS,
  }),
  secret: 'Play Tag',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
  },
}));
// app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);
app.use(favicon(`${__dirname}/../client/img/favicon.png`));
app.disable('x-powered-by');
app.use(cookieParser());

// csrf must come AFTER app.use(cookieParser());
// and app.use(session{{....});
// should come BEFORE the router
app.use(csrf());
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  console.log('csrf error');
  return false;
});

router(app);

// const serv = app.listen(port, (err) => {
// app.listen(port, (err) => {
expressServer = app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});

// connect socket server
socketServer(expressServer);
