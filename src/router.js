const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  // requests for Account controller to handle
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  // requests for profile controller to handle
  app.get('/makeProfile', mid.requiresLogin, controllers.Profile.makeProfile);
  app.get('/profile', mid.requiresLogin, controllers.Profile.profilePage);
  app.get('/guest', controllers.Profile.guestPage);
  app.post('/joinRoom', controllers.Profile.joinRoom);
  app.get('/joinRoom/:roomName', controllers.Profile.multiGamePage);
  app.get('/singleGame/:levelNum', controllers.Profile.singleGamePage);

  // requests for working with account settings page
  app.get('/settings', mid.requiresLogin, controllers.Profile.settingsPage);
  app.post('/displayName', mid.requiresLogin, controllers.Profile.changeDisplayName);
  app.post('/changePass', mid.requiresLogin, controllers.Account.changePassword);

  // requests from the game page
  app.post('/updateStats', mid.requiresLogin, controllers.Profile.updateStats);

  // requests for root route to login page
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
