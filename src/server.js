const socketio = require('socket.io');

let io = {};

const clients = {};
const waiting = [];

/*
  onJoined - socket event handler for on('joinReq')
    checks if user already exists, if it does send joinFail response

  also connects on('join') event handler for socket
    pushes username to collection and the calling socket gets added
  to clients collection.
*/
const onJoined = (sock) => {
  const socket = sock;

  socket.on('join', (data) => {
    let roomFull = false;
    socket.name = data.name;

    let playerType = 1;
    const roomname = data.room;
    if (!clients[roomname]) {
      socket.roomname = roomname;
      waiting.push(roomname);
      clients[roomname] = [];
      clients[roomname].push(socket);
    } else if (Object.keys(clients[roomname]).length > 1) {
      socket.emit('roomFull');
      roomFull = true;
    } else {
      playerType = 2;
      waiting.splice(waiting.indexOf(roomname), 1);
      socket.roomname = roomname;
      clients[roomname].push(socket);
    }
    if (!roomFull) {
      socket.join(roomname);
      socket.emit('joined', { playerType });
    }
  });
};

/*
  onMsg - socket event handler for on('msg')

  emits message to all users in the room
*/
const onMsg = (sock) => {
  const socket = sock;

  socket.on('ready', () => {
    if (clients[socket.roomname].length > 1) {
      io.to(socket.roomname).emit('load');
      // both sockets in the room should broadcast their name
      // so the enemy can have it
      for (let i = 0; i < clients[socket.roomname].length; i += 1) {
        const curSock = clients[socket.roomname][i];
        curSock.broadcast.to(curSock.roomname).emit('enemyName', { name: curSock.name });
      }
    }
  });

  socket.on('loaded', () => {
    socket.emit('start');
  });

  socket.on('updatePlayer', (data) => {
    socket.broadcast.to(socket.roomname).emit('updateEnemy', data);
  });

  socket.on('reportCollision', () => {
    socket.broadcast.to(socket.roomname).emit('collisionReport');
  });

  socket.on('toggleCoin', (data) => {
    socket.broadcast.to(socket.roomname).emit('coinToggle', { index: data.index });
  });

  socket.on('deadMonster', (data) => {
    socket.broadcast.to(socket.roomname).emit('killMonster', { index: data.index });
  });

  socket.on('tradeIt', () => {
    socket.broadcast.to(socket.roomname).emit('becomeIt');
  });

  socket.on('updateTime', (data) => {
    socket.broadcast.to(socket.roomname).emit('timeUpdate', { time: data.time });
  });

  socket.on('gameOver', () => {
    socket.broadcast.to(socket.roomname).emit('endGame');
  });
};


/*
  onDisconnect - socket event handler for on('disconnect')

*/
const onDisconnect = (sock) => {
  const socket = sock;
  socket.on('disconnect', () => {
    if (socket.roomname) {
      if (clients[socket.roomname]) {
        let other = clients[socket.roomname][0];
        if (other.name === socket.name) {
          other = clients[socket.roomname][1];
        }

        delete clients[socket.roomname];
        if (other !== undefined) {
          other.emit('otherDisconnect');
        }
      }
    }
  });
};

/*
  connection handler
    connects all other event handlers to socket
*/
const connect = () => {
  io.sockets.on('connection', (socket) => {
    onJoined(socket);
    onMsg(socket);
    onDisconnect(socket);
  });
};

const server = (app) => {
  io = socketio(app);
  connect();
};

module.exports = server;
