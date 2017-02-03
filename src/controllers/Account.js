const models = require('../models');

const Account = models.Account;

const MAX_STRLEN = 20;  // maximum string length is 20 characters

const loginPage = (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
};

const signupPage = (req, res) => {
  res.render('signup', { csrfToken: req.csrfToken() });
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const validateString = str => str.length <= MAX_STRLEN;

const login = (request, response) => {
  const req = request;
  const res = response;

  // force cast to strings to cover some security flaws
  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!validateString(username)) {
    return res.status(400).json({ error: 'Username cannot exceed 20 characters' });
  }

  if (!validateString(password)) {
    return res.status(400).json({ error: 'Password cannot exceed 20 characters' });
  }

  return Account.AccountModel.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }

    req.session.account = Account.AccountModel.toAPI(account);

    return res.json({ redirect: '/profile' });
  });
};

const signup = (request, response) => {
  const req = request;
  const res = response;
  const username = `${req.body.username}`;
  const pass = `${req.body.pass}`;
  const pass2 = `${req.body.pass2}`;

  if (!username || !pass || !pass2) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  if (pass !== pass2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  if (!validateString(username)) {
    return res.status(400).json({ error: 'Username cannot exceed 20 characters' });
  }

  if (!validateString(pass)) {
    return res.status(400).json({ error: 'Password cannot exceed 20 characters' });
  }

  return Account.AccountModel.generateHash(pass, (salt, hash) => {
    const accountData = {
      username,
      salt,
      password: hash,
    };

    const newAccount = new Account.AccountModel(accountData);

    newAccount.save((err) => {
      if (err) {
        if (err.code === 11000) {
          return res.status(400).json({ error: 'Username already exists' });
        }
        return res.status(400).json({ error: 'An error occured' });
      }

      req.session.account = Account.AccountModel.toAPI(newAccount);

      // redirect to make profile. New accounts will get a default
      // profile that can be adjusted after
      return res.json({ redirect: '/makeProfile' });
    });
  });
};

const changePassword = (req, res) => {
  const username = `${req.session.account.username}`;
  const oldpass = `${req.body.oldpass}`;
  const newpass = `${req.body.newpass}`;
  const newpass2 = `${req.body.newpass2}`;

  if (!oldpass || !newpass || !newpass2) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (newpass !== newpass2) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!validateString(newpass)) {
    return res.status(400).json({ error: 'Password cannot exceed 20 characters' });
  }

  // authenticate
  return Account.AccountModel.authenticate(username, oldpass, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Password was incorrect' });
    }
    // generate hash for new password and save
    return Account.AccountModel.generateHash(newpass, (salt, hash) => {
      const userAccount = account;
      userAccount.salt = salt;
      userAccount.password = hash;

      userAccount.save((er) => {
        if (er) {
          return res.json({ error: 'An error occured' });
        }

        return res.json({ redirect: '/profile' });
      });
    });
  });
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signupPage = signupPage;
module.exports.signup = signup;
module.exports.changePassword = changePassword;
