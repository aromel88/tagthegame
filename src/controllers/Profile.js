const models = require('../models');

const Profile = models.Profile;

const MAX_STRLEN = 20;  // maximum string length is 20 characters

const validateString = str => str.length <= MAX_STRLEN;

const profilePage = (request, res) => {
  const req = request;

  Profile.ProfileModel.findByOwner(req.session.account._id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    if (!req.session.displayName || req.session.displayName !== doc.displayName) {
      req.session.displayName = doc.displayName;
    }

    return res.render('profile', { csrfToken: req.csrfToken(), profile: doc });
  });
};

const guestPage = (request, res) => {
  const req = request;

  req.session.guest = 'guest';
  return res.render('profile', { csrfToken: req.csrfToken() });
};

// make profile gets called once when the account is created
const makeProfile = (req, res) => {
  // nothing to check for, as long as a user made a valid account
  // this method will make a profile with default values

  const profileData = {
    displayName: `${req.session.account.username}`,
    numWins: 0,
    numLosses: 0,
    coinsGot: 0,
    monstersKilled: 0,
    owner: req.session.account._id,
  };

  const newProfile = new Profile.ProfileModel(profileData);

  return newProfile.save((err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.redirect('/profile');
  });
};

// region not yet implemented
// the user can change their display name at any time
const changeDisplayName = (request, res) => {
  const req = request;
  const newName = `${req.body.newName}`;

  if (!validateString(newName)) {
    return res.status(400).json({ error: 'Display name cannot exceed 20 characters' });
  }

  return Profile.ProfileModel.findByOwner(req.session.account._id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    const playerProfile = doc;
    playerProfile.displayName = newName;
    return playerProfile.save((er) => {
      if (er) {
        console.log(er);
        return res.status(400).json({ error: 'An error occured' });
      }
      req.session.displayName = playerProfile.displayName;
      return res.json({ redirect: '/profile' });
    });
  });
};

// join room attempts to make socket connections using provided room name
// and the display name of the player
const joinRoom = (request, response) => {
  const req = request;
  const res = response;
  const room = `${req.body.room}`;
  const name = req.body.name;

  if (!validateString(room)) {
    return res.status(400).json({ error: 'Room name cannot exceed 20 characters' });
  }

  if (name) {
    const displayName = `${name}`;
    if (!validateString(name)) {
      return res.status(400).json({ error: 'Room name cannot exceed 20 characters' });
    }
    req.session.displayName = displayName;
    return res.json({ redirect: `/joinRoom/${room}` });
  }

  return Profile.ProfileModel.findByOwner(req.session.account._id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }
    req.session.displayName = doc.displayName;
    return res.json({ redirect: `/joinRoom/${room}` });
  });
};

const multiGamePage = (req, res) => {
  res.render('game',
    {
      csrfToken: req.csrfToken(),
      roomName: req.params.roomName,
      displayName: req.session.displayName,
      gametype: 'multi',
    });
};

const singleGamePage = (req, res) => {
  let nextLevel;

  if (req.params.levelNum < 2) {
    nextLevel = `${parseInt(req.params.levelNum, 10) + 1}`;
  }
  res.render('game',
    {
      csrfToken: req.csrfToken(),
      gametype: 'single',
      levelNum: req.params.levelNum,
      nextLevel,
    });
};

const settingsPage = (req, res) => {
  res.render('settings', {
    csrfToken: req.csrfToken(),
    username: req.session.account.username,
    displayName: req.session.displayName,
  });
};

const updateStats = (req, res) => {
  Profile.ProfileModel.findByOwner(req.session.account._id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    const playerProfile = doc;
    const win = Number.parseInt(req.body.win, 10);
    const coins = Number.parseInt(req.body.coins, 10);
    const kills = Number.parseInt(req.body.kills, 10);

    if (win === 0) {
      playerProfile.numLosses += 1;
    } else {
      playerProfile.numWins += 1;
    }

    playerProfile.coinsGot += coins;
    playerProfile.monstersKilled += kills;
    return playerProfile.save((er) => {
      if (er) {
        console.log(er);
        return res.status(400).json({ error: 'An error occured' });
      }
      return res.json({ success: 'success!' });
    });
  });
};

module.exports.profilePage = profilePage;
module.exports.guestPage = guestPage;
module.exports.makeProfile = makeProfile;
module.exports.changeDisplayName = changeDisplayName;
module.exports.joinRoom = joinRoom;
module.exports.multiGamePage = multiGamePage;
module.exports.singleGamePage = singleGamePage;
module.exports.settingsPage = settingsPage;
module.exports.updateStats = updateStats;
