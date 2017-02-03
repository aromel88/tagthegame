/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// resources

var dir = '/assets/img';

var imagePaths = {

  bg_backgroundImage: dir + '/bg.png',
  bg_platImage: dir + '/plat.png',

  haloImage: dir + '/halo.png',

  coinImage: dir + '/coin.png',

  p1_idleRightImage: dir + '/p1_idleRight.png',
  p1_idleLeftImage: dir + '/p1_idleLeft.png',
  p1_jumpUpRightImage: dir + '/p1_jumpUpRight.png',
  p1_jumpUpLeftImage: dir + '/p1_jumpUpLeft.png',
  p1_jumpFallRightImage: dir + '/p1_jumpFallRight.png',
  p1_jumpFallLeftImage: dir + '/p1_jumpFallLeft.png',
  p1_runRightImage: dir + '/p1_runRight.png',
  p1_runLeftImage: dir + '/p1_runLeft.png',

  p2_idleRightImage: dir + '/p2_idleRight.png',
  p2_idleLeftImage: dir + '/p2_idleLeft.png',
  p2_jumpUpRightImage: dir + '/p2_jumpUpRight.png',
  p2_jumpUpLeftImage: dir + '/p2_jumpUpLeft.png',
  p2_jumpFallRightImage: dir + '/p2_jumpFallRight.png',
  p2_jumpFallLeftImage: dir + '/p2_jumpFallLeft.png',
  p2_runRightImage: dir + '/p2_runRight.png',
  p2_runLeftImage: dir + '/p2_runLeft.png',

  b_monster_runLeftImage: dir + '/b_monster_runLeft.png',
  b_monster_runRightImage: dir + '/b_monster_runRight.png',
  b_monster_deadLeftImage: dir + '/b_monster_deadLeft.png',
  b_monster_deadRightImage: dir + '/b_monster_deadRight.png',

  p_monster_runLeftImage: dir + '/p_monster_runLeft.png',
  p_monster_runRightImage: dir + '/p_monster_runRight.png',
  p_monster_deadLeftImage: dir + '/p_monster_deadLeft.png',
  p_monster_deadRightImage: dir + '/p_monster_deadRight.png',

  y_monster_runLeftImage: dir + '/y_monster_runLeft.png',
  y_monster_runRightImage: dir + '/y_monster_runRight.png',
  y_monster_deadLeftImage: dir + '/y_monster_deadLeft.png',
  y_monster_deadRightImage: dir + '/y_monster_deadRight.png'

};

var images = {};

var init = function init() {
  // background is not a sprite, it's just an image
  images.bg_backgroundImage = new Image();
  images.bg_backgroundImage.src = imagePaths.bg_backgroundImage;

  // platforms are just images as well
  images.bg_platImage = new Image();
  images.bg_platImage.src = imagePaths.bg_platImage;

  // halo is just an image as well
  images.halo = new Image();
  images.halo.src = imagePaths.haloImage;

  // coin sprite
  images.coin = {};
  images.coin.img = new Image();
  images.coin.img.src = imagePaths.coinImage;
  images.coin.spriteParams = { frameWidth: 20, frameHeight: 20, numFrames: 6, frameDelay: 1 / 12 };

  // player 1 sprites, red hair boy
  images.p1_idleRight = {};
  images.p1_idleRight.img = new Image();
  images.p1_idleRight.img.src = imagePaths.p1_idleRightImage;
  images.p1_idleRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p1_idleLeft = {};
  images.p1_idleLeft.img = new Image();
  images.p1_idleLeft.img.src = imagePaths.p1_idleLeftImage;
  images.p1_idleLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p1_jumpUpRight = {};
  images.p1_jumpUpRight.img = new Image();
  images.p1_jumpUpRight.img.src = imagePaths.p1_jumpUpRightImage;
  images.p1_jumpUpRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p1_jumpUpLeft = {};
  images.p1_jumpUpLeft.img = new Image();
  images.p1_jumpUpLeft.img.src = imagePaths.p1_jumpUpLeftImage;
  images.p1_jumpUpLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p1_jumpFallRight = {};
  images.p1_jumpFallRight.img = new Image();
  images.p1_jumpFallRight.img.src = imagePaths.p1_jumpFallRightImage;
  images.p1_jumpFallRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p1_jumpFallLeft = {};
  images.p1_jumpFallLeft.img = new Image();
  images.p1_jumpFallLeft.img.src = imagePaths.p1_jumpFallLeftImage;
  images.p1_jumpFallLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p1_runRight = {};
  images.p1_runRight.img = new Image();
  images.p1_runRight.img.src = imagePaths.p1_runRightImage;
  images.p1_runRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 6, frameDelay: 1 / 12 };

  images.p1_runLeft = {};
  images.p1_runLeft.img = new Image();
  images.p1_runLeft.img.src = imagePaths.p1_runLeftImage;
  images.p1_runLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 6, frameDelay: 1 / 12 };

  // player 2 sprites, green hair boy
  images.p2_idleRight = {};
  images.p2_idleRight.img = new Image();
  images.p2_idleRight.img.src = imagePaths.p2_idleRightImage;
  images.p2_idleRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p2_idleLeft = {};
  images.p2_idleLeft.img = new Image();
  images.p2_idleLeft.img.src = imagePaths.p2_idleLeftImage;
  images.p2_idleLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p2_jumpUpRight = {};
  images.p2_jumpUpRight.img = new Image();
  images.p2_jumpUpRight.img.src = imagePaths.p2_jumpUpRightImage;
  images.p2_jumpUpRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p2_jumpUpLeft = {};
  images.p2_jumpUpLeft.img = new Image();
  images.p2_jumpUpLeft.img.src = imagePaths.p2_jumpUpLeftImage;
  images.p2_jumpUpLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p2_jumpFallRight = {};
  images.p2_jumpFallRight.img = new Image();
  images.p2_jumpFallRight.img.src = imagePaths.p2_jumpFallRightImage;
  images.p2_jumpFallRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p2_jumpFallLeft = {};
  images.p2_jumpFallLeft.img = new Image();
  images.p2_jumpFallLeft.img.src = imagePaths.p2_jumpFallLeftImage;
  images.p2_jumpFallLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 1, frameDelay: 1 / 12 };

  images.p2_runRight = {};
  images.p2_runRight.img = new Image();
  images.p2_runRight.img.src = imagePaths.p2_runRightImage;
  images.p2_runRight.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 6, frameDelay: 1 / 12 };

  images.p2_runLeft = {};
  images.p2_runLeft.img = new Image();
  images.p2_runLeft.img.src = imagePaths.p2_runLeftImage;
  images.p2_runLeft.spriteParams = { frameWidth: 30, frameHeight: 40, numFrames: 6, frameDelay: 1 / 12 };

  // blue monster
  images.b_runLeft = {};
  images.b_runLeft.img = new Image();
  images.b_runLeft.img.src = imagePaths.b_monster_runLeftImage;
  images.b_runLeft.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.b_runRight = {};
  images.b_runRight.img = new Image();
  images.b_runRight.img.src = imagePaths.b_monster_runRightImage;
  images.b_runRight.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.b_deadLeft = {};
  images.b_deadLeft.img = new Image();
  images.b_deadLeft.img.src = imagePaths.b_monster_deadLeftImage;
  images.b_deadLeft.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.b_deadRight = {};
  images.b_deadRight.img = new Image();
  images.b_deadRight.img.src = imagePaths.b_monster_deadRightImage;
  images.b_deadRight.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  // pink monster
  images.p_runLeft = {};
  images.p_runLeft.img = new Image();
  images.p_runLeft.img.src = imagePaths.p_monster_runLeftImage;
  images.p_runLeft.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.p_runRight = {};
  images.p_runRight.img = new Image();
  images.p_runRight.img.src = imagePaths.p_monster_runRightImage;
  images.p_runRight.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.p_deadLeft = {};
  images.p_deadLeft.img = new Image();
  images.p_deadLeft.img.src = imagePaths.p_monster_deadLeftImage;
  images.p_deadLeft.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.p_deadRight = {};
  images.p_deadRight.img = new Image();
  images.p_deadRight.img.src = imagePaths.p_monster_deadRightImage;
  images.p_deadRight.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  // yellow monster
  images.y_runLeft = {};
  images.y_runLeft.img = new Image();
  images.y_runLeft.img.src = imagePaths.y_monster_runLeftImage;
  images.y_runLeft.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.y_runRight = {};
  images.y_runRight.img = new Image();
  images.y_runRight.img.src = imagePaths.y_monster_runRightImage;
  images.y_runRight.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.y_deadLeft = {};
  images.y_deadLeft.img = new Image();
  images.y_deadLeft.img.src = imagePaths.y_monster_deadLeftImage;
  images.y_deadLeft.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };

  images.y_deadRight = {};
  images.y_deadRight.img = new Image();
  images.y_deadRight.img.src = imagePaths.y_monster_deadRightImage;
  images.y_deadRight.spriteParams = { frameWidth: 40, frameHeight: 40, numFrames: 2, frameDelay: 1 / 12 };
};

module.exports.imagePaths = imagePaths;
module.exports.images = images;
module.exports.init = init;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _platform = __webpack_require__(10);

var _coin = __webpack_require__(8);

var _monster = __webpack_require__(9);

var utils = __webpack_require__(2); // main.js
// Dependencies:
// Description: singleton object
// This object will be our main "controller" class and will contain references
// to most of the other objects in the game.

// imports

var resources = __webpack_require__(0);
var screenManager = __webpack_require__(11);
var inputManager = __webpack_require__(6);
var player = __webpack_require__(5);
var enemy = __webpack_require__(4);
var client = __webpack_require__(7);

//  properties
var WIDTH = 800;
var HEIGHT = 600;
var gameType = void 0;
var canvas = void 0;
var ctx = void 0;
var animationID = 0;
var lastTime = 0;
var dt = 0;
var started = false;
var playerName = void 0;
var enemyName = void 0;
var timer = 60000; // 1 minute in miliseconds
var plats = [];
var coins = [];
var monsters = [];

// methods
var init = function init(type) {
  gameType = type;

  // initialize properties
  canvas = document.querySelector('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx = canvas.getContext('2d');

  if (gameType === 'multi') {
    multiPlayerSetup();
  } else {
    singlePlayerSetup();
  }
};

var multiPlayerSetup = function multiPlayerSetup() {
  var roomname = document.querySelector('#roominput').value;
  playerName = document.querySelector('#nameinput').value;
  client.init(playerName, roomname);
};

var singlePlayerSetup = function singlePlayerSetup() {
  player.init(1);

  var levelNum = document.querySelector('#levelNum').value;
  if (levelNum) {
    loadLevel('' + levelNum);
    console.log('success for level ' + levelNum);
  } else {
    loadLevel('1');
  }
};

var start = function start() {
  document.querySelector('#loading').style.display = 'none';
  document.querySelector('#playarea').style.display = 'block';
  started = true;
  update();
};

var loadLevel = function loadLevel(fileName) {
  var levelFile = '/assets/levels/' + fileName + '.xml';
  document.querySelector('#playarea').style.display = 'none';
  document.querySelector('#loading').style.display = 'block';

  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var levelData = xhr.responseXML;

    // get platform data
    var platData = levelData.querySelectorAll('platform');
    var platImg = resources.images.bg_platImage;

    // get coin data
    var coinData = levelData.querySelectorAll('coin');

    // get monster data
    var monsterData = levelData.querySelectorAll('monster');

    // initialize platforms
    for (var i = 0; i < platData.length; i++) {
      var platSettings = {};
      platSettings.x = parseInt(platData[i].getAttribute('x'));
      platSettings.y = parseInt(platData[i].getAttribute('y'));
      platSettings.width = parseInt(platData[i].getAttribute('width'));
      plats.push(new _platform.Platform(platImg, platSettings));
    }

    // initialize coins
    for (var _i = 0; _i < coinData.length; _i++) {
      var xPos = parseInt(coinData[_i].getAttribute('x'));
      var yPos = parseInt(coinData[_i].getAttribute('y'));
      coins.push(new _coin.Coin({ x: xPos, y: yPos }));
    }

    // initialize monsters
    for (var _i2 = 0; _i2 < monsterData.length; _i2++) {
      // parse out monster data
      var _xPos = parseInt(monsterData[_i2].getAttribute('x'));
      var _yPos = parseInt(monsterData[_i2].getAttribute('y'));
      var dir = parseInt(monsterData[_i2].getAttribute('dir'));
      var lb = parseInt(monsterData[_i2].getAttribute('lb'));
      var rb = parseInt(monsterData[_i2].getAttribute('rb'));
      var type = monsterData[_i2].getAttribute('type');
      var speed = parseInt(monsterData[_i2].getAttribute('speed'));

      monsters.push(new _monster.Monster({ x: _xPos, y: _yPos }, // position
      0, // direction
      { left: lb, right: rb }, // bounds
      type, // type
      _i2, // index
      speed));
    }

    if (gameType === 'multi') {
      client.loaded();
    } else {
      // get player and enemy data
      var playerData = levelData.querySelector('player');
      var playerPosition = {};
      playerPosition.x = parseInt(playerData.getAttribute('x'));
      playerPosition.y = parseInt(playerData.getAttribute('y'));
      player.setPos(playerPosition.x, playerPosition.y);

      $('#waiting').hide();
      $('#ingameUI').show();
      start();
    }
  };

  xhr.open('GET', levelFile, true);
  // try to prevent browser caching by sending a header to the server
  xhr.setRequestHeader('If-Modified-Since', 'Sat, 1 Jan 2010 00:00:00 GMT');
  xhr.send();
};

var calc1ulateDeltaTime = function calc1ulateDeltaTime() {
  var now = new Date().getTime();
  var fps = 1000 / (now - lastTime);
  fps = utils.clamp(fps, 12, 60);
  lastTime = now;
  dt = 1 / fps;
};

var gameOver = function gameOver() {
  var winner = '';
  var loser = '';
  var winCoins = '';
  var winKills = '';
  var loseCoins = '';
  var loseKills = '';

  if (player.getScore() > enemy.getScore() || player.getScore() == enemy.getScore() && !player.isIt()) {
    client.updateStats(1, player.coins(), player.kills());
    winner = '' + playerName;
    loser = '' + enemyName;
    winCoins = '' + player.coins();
    winKills = '' + player.kills();
    loseCoins = '' + enemy.coins();
    loseKills = '' + enemy.kills();
  } else {
    client.updateStats(0, player.coins(), player.kills());
    winner = '' + enemyName;
    loser = '' + playerName;
    winCoins = '' + enemy.coins();
    winKills = '' + enemy.kills();
    loseCoins = '' + player.coins();
    loseKills = '' + player.kills();
  }

  document.querySelector('#winner').innerHTML = 'The winner is ' + winner + '!';
  document.querySelector('#winner-coins').innerHTML = winCoins + ' coins';
  document.querySelector('#winner-kills').innerHTML = winKills + ' kills';

  document.querySelector('#loser').innerHTML = 'Stats for ' + loser + '!';
  document.querySelector('#loser-coins').innerHTML = loseCoins + ' coins';
  document.querySelector('#loser-kills').innerHTML = loseKills + ' kills';
  $('#gameFinished').show();
  $('#gameOver').show('slide', { direction: 'down' }, 1000, function () {
    $(canvas).hide();
  });
};

var singleGameWin = function singleGameWin() {
  $('#ingameUI').hide();
  $('#singleWin').show();
  $('#gameOver').show('slide', { direction: 'down' }, 1000);
};

var singleGameLose = function singleGameLose() {
  $('#ingameUI').hide();
  $('#singleLose').show();
  $('#gameOver').show('slide', { direction: 'down' }, 1000);
};

var update = function update() {
  if (started) {
    // schedule a call to update()
    animationID = requestAnimationFrame(update);
    calc1ulateDeltaTime();

    // do not process input if player is frozen
    if (player.playState() != player.PLAY_STATES.FREEZE && player.playState() != player.PLAY_STATES.DEAD) {
      inputManager.processInput(dt);
    }

    player.update(dt);
    screenManager.drawPlay(ctx, dt);

    // update coin sprites
    for (var i = 0; i < coins.length; i++) {
      coins[i].update(dt);
    }

    // update monsters
    for (var _i3 = 0; _i3 < monsters.length; _i3++) {
      monsters[_i3].update(dt);
    }

    // if gametype is single check endgame conditions
    if (gameType === 'single') {
      if (player.kills() === monsters.length) {
        singleGameWin();
      }

      if (player.pos().y > 800) {
        singleGameLose();
      }
    }

    // player 1 (host) keeps track of official time (in multi-player mode only)
    else if (player.type() == 1) {
        timer -= dt * 1000;
        if (timer <= 0.2) {
          started = false;
          client.gameOver();
          gameOver();
        }
      }
  }
};

var updateTime = function updateTime() {
  client.updateTime(timer);
};

var setHost = function setHost() {
  // the host updates the time for the client (twice a second)
  setInterval(updateTime, 100);
};

var getTimeUpdate = function getTimeUpdate(newTime) {
  timer = newTime;
};

var getPlats = function getPlats() {
  return plats;
};

module.exports.init = init;
module.exports.start = start;
module.exports.update = update;
module.exports.loadLevel = loadLevel;
module.exports.getPlats = getPlats;
module.exports.coins = coins;
module.exports.monsters = monsters;
module.exports.getTimeUpdate = getTimeUpdate;
module.exports.host = setHost;
module.exports.gameOver = gameOver;

// getters and setters for non-function/object values
module.exports.gameType = function () {
  return gameType;
};
module.exports.getEnemyName = function () {
  return enemyName;
};
module.exports.timer = function () {
  return timer;
};
module.exports.getPlayerName = function () {
  return playerName;
};
module.exports.setEnemyName = function (value) {
  enemyName = value;
};
module.exports.getStarted = function () {
  return started;
};
module.exports.setStarted = function (value) {
  started = value;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utilities.js
// several various convenience methods for use
//

// returns mouse position in local coordinate system of element
var getMouse = function getMouse(e) {
  var mouse = {}; // make an object
  mouse.x = e.pageX - e.target.offsetLeft;
  mouse.y = e.pageY - e.target.offsetTop - 50;
  return Object.seal(mouse);
};

var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};

var makeColor = function makeColor(red, green, blue, alpha) {
  var color = "rgba(" + red + "," + green + "," + blue + ", " + alpha + ")";
  return color;
};

// Function Name: getRandomColor()
// returns a random color of alpha 1.0
// http://paulirish.com/2009/random-hex-color-code-snippets/
var getRandomColor = function getRandomColor() {
  var red = Math.round(Math.random() * 200 + 55);
  var green = Math.round(Math.random() * 200 + 55);
  var blue = Math.round(Math.random() * 200 + 55);
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  // OR	if you want to change alpha
  // var color='rgba('+red+','+green+','+blue+',0.50)'; // 0.50
  return color;
};

var getRandomUnitVector = function getRandomUnitVector() {
  var x = getRandom(-1, 1);
  var y = getRandom(-1, 1);
  var length = Math.sqrt(x * x + y * y);
  if (length == 0) {
    // very unlikely
    x = 1; // point right
    y = 0;
    length = 1;
  } else {
    x /= length;
    y /= length;
  }
  return {
    x: x,
    y: y
  };
};

// http://stackoverflow.com/questions/2212604/javascript-check-mouse-clicked-inside-the-circle-or-polygon
// using 'distance squared' here, why?
// I is for "Instance"
var pointerInsideCircle = function pointerInsideCircle(x, y, I) {
  var dx = x - I.x;
  var dy = y - I.y;
  return dx * dx + dy * dy <= I.radius * I.radius;
};

// checks collisions using AABB collision
// detection
var collides = function collides(col1, col2) {
  var maxX1 = col1.x + col1.halfW;
  var minX1 = col1.x - col1.halfW;
  var maxX2 = col2.x + col2.halfW;
  var minX2 = col2.x - col2.halfW;
  var maxY1 = col1.y + col1.halfH;
  var minY1 = col1.y - col1.halfH;
  var maxY2 = col2.y + col2.halfH;
  var minY2 = col2.y - col2.halfH;

  if (minX1 > maxX2 || maxX1 < minX2 || minY1 > maxY2 || maxY1 < minY2) {
    return false;
  }

  return true;
};

var timerAsString = function timerAsString(milis) {
  var totalSeconds = milis / 1000;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = Math.floor(totalSeconds % 60);

  return seconds >= 10 ? minutes + ":" + seconds : minutes + ":0" + seconds;
};

var clamp = function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
};

var requestFullscreen = function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullscreen) {
    element.mozRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // camel-cased 'S' was changed to 's' in spec
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
  // .. and do nothing if the method is not supported
};

module.exports.getMouse = getMouse;
module.exports.getRandom = getRandom;
module.exports.makeColor = makeColor;
module.exports.getRandomColor = getRandomColor;
module.exports.getRandomUnitVector = getRandomUnitVector;
module.exports.pointerInsideCircle = pointerInsideCircle;
module.exports.collides = collides;
module.exports.timerAsString = timerAsString;
module.exports.clamp = clamp;
module.exports.requestFullscreen = requestFullscreen;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    File: animationSprite.js
    Function constructor used to create animation sprite objects that are
    able to take an single row sprite image, update and draw.
*/

// param img - HTML image object that is the sprite sheet
// param frameWidth - width of individual frames in sprite sheet
// param frameHeight - height of individual frames in the sprite sheet
// param numFrames - number of frames on the sprite sheet
// param frameDelay - delay between frames (animation speed)
// param color - color to draw primitive if the image is null
var AnimationSprite = exports.AnimationSprite = function () {
  function AnimationSprite(img, settings) {
    _classCallCheck(this, AnimationSprite);

    this.image = img;
    this.frameWidth = settings.frameWidth;
    this.frameHeight = settings.frameHeight;
    this.numFrames = settings.numFrames;
    this.frameDelay = settings.frameDelay;
    this.frameIndex = 0;
    this.lastTime = 0;
  }

  // update function to animate this sprite
  // param dt - delta time since last update call


  _createClass(AnimationSprite, [{
    key: "update",
    value: function update(dt) {
      this.lastTime += dt;
      if (this.lastTime >= this.frameDelay) {
        this.lastTime = 0;
        this.frameIndex++;
      }
      if (this.frameIndex >= this.numFrames) {
        this.frameIndex = 0;
      }
    }

    // draw method called by sprite object to draw the current frame
    // param ctx the canvas context to draw the frame to
    // param x - the x coordinate of the canvas to draw the frame
    // param y - the y coordinate of the canvas to draw the frame
    // angle - the angle to rotate the frame on the canvas

  }, {
    key: "draw",
    value: function draw(ctx, x, y, angle) {
      ctx.save();
      var halfW = this.frameWidth / 2;
      var halfH = this.frameHeight / 2;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.drawImage(this.image, this.frameIndex * this.frameWidth, 0, this.frameWidth, this.frameHeight, -halfW, -halfH, this.frameWidth, this.frameHeight);
      ctx.restore();
    }
  }]);

  return AnimationSprite;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animationSprite = __webpack_require__(3);

var main = __webpack_require__(1); // enemy.js
// object to represent enemy in game.
// properties will be updated via websocket server connection
// only drawing will be handled by client
//

// imports

var resources = __webpack_require__(0);

var animationStates = ['idleRight', 'idleLeft', 'jumpUpRight', 'jumpUpLeft', 'jumpFallRight', 'jumpFallLeft', 'runRight', 'runLeft'];

// playstates 'enum'
var PLAY_STATES = {
  FREEZE: 0,
  IMMUNE: 1,
  ACTIVE: 2
};
var flashTimer = 0;
var flashCounter = 0;
var minFlash = 0.25;
var maxFlash = 0.5;

// direction 'enum'
var DIRECTION = {
  RIGHT: 0,
  LEFT: 1
};

var SPRITES = {};
var sprite = void 0;
var x = 0;
var y = 0;
var width = 20;
var height = 30;
var halfW = 10;
var halfH = 15;
var collider = {};
var xSpeed = 0;
var ySpeed = 0;
var direction = void 0;
var grounded = true;
var deadAngle = 0;
var score = 0;
var coins = 0;
var kills = 0;
var playState = PLAY_STATES.ACTIVE;

var init = function init(playerType) {
  if (playerType === 1) {
    makeSprites('p1');
    sprite = SPRITES.idleRight;
  } else {
    makeSprites('p2');
    sprite = SPRITES.idleLeft;
  }

  collider.x = x;
  collider.y = y;
  collider.width = width;
  collider.height = height;
  collider.halfW = width / 2;
  collider.halfH = height / 2;
};

// makeSprites - make a sprite for each state
var makeSprites = function makeSprites(pType) {
  for (var i = 0; i < animationStates.length; i++) {
    var sp = pType + '_' + animationStates[i];
    SPRITES[animationStates[i]] = new _animationSprite.AnimationSprite(resources.images[sp].img, // the image
    resources.images[sp].spriteParams);
  }
};

var draw = function draw(ctx) {
  if (playState == PLAY_STATES.ACTIVE || flashTimer > minFlash && flashTimer < maxFlash) {
    sprite.draw(ctx, x, y, 0);
  }
};

var flash = function flash(dt) {
  if (playState == PLAY_STATES.FREEZE) {
    minFlash = 0.25;
    maxFlash = 0.5;
  } else {
    minFlash = 0.15;
    maxFlash = 0.25;
  }

  flashTimer += dt;
  if (flashTimer >= maxFlash) {
    flashTimer = 0;
  }
};

var update = function update(_x, _y, _direction, _xSpeed, _ySpeed, _grounded, dt, _playState) {
  playState = _playState;
  x = _x;
  y = _y;
  direction = _direction;
  xSpeed = _xSpeed;
  ySpeed = _ySpeed;
  grounded = _grounded;
  animate(dt);
  sprite.update(dt);
  collider.x = x;
  collider.y = y;

  if (playState != PLAY_STATES.ACTIVE) {
    flash(dt);
  }
};

var animate = function animate(dt) {
  if (direction == DIRECTION.RIGHT) {
    if (grounded) {
      if (xSpeed == 0) sprite = SPRITES.idleRight;else sprite = SPRITES.runRight;
    } else sprite = SPRITES.jumpUpRight;
  } else if (grounded) {
    if (xSpeed == 0) sprite = SPRITES.idleLeft;else sprite = SPRITES.runLeft;
  } else sprite = SPRITES.jumpUpLeft;
};

var getPos = function getPos() {
  return { x: x, y: y };
};

var getSize = function getSize() {
  return { width: width, height: height };
};

var getGrounded = function getGrounded() {
  return grounded;
};

var getScore = function getScore() {
  return score;
};

var enemyScore = function enemyScore() {
  score += 1;
};

var enemyCoin = function enemyCoin() {
  coins += 1;
};

var enemyKill = function enemyKill() {
  kills += 1;
};

module.exports.init = init;
module.exports.draw = draw;
module.exports.update = update;
module.exports.pos = getPos;
module.exports.size = getSize;
module.exports.grounded = getGrounded;
module.exports.collider = collider;
module.exports.getScore = getScore;
module.exports.enemyScore = enemyScore;
module.exports.enemyCoin = enemyCoin;
module.exports.enemyKill = enemyKill;
module.exports.coins = function () {
  return coins;
};
module.exports.kills = function () {
  return kills;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _animationSprite = __webpack_require__(3);

var main = __webpack_require__(1); // player.js
// object to represent player in game.
// holds logic for movement physics and collisions
//
// imports

var client = __webpack_require__(7);
var enemy = __webpack_require__(4);
var resources = __webpack_require__(0);
var utils = __webpack_require__(2);

var animationStates = ['idleRight', 'idleLeft', 'jumpUpRight', 'jumpUpLeft', 'jumpFallRight', 'jumpFallLeft', 'runRight', 'runLeft'];

// play states enum
var PLAY_STATES = {
  FREEZE: 0, // invulnerable, cannot move
  IMMUNE: 1, // invulnerable, can move
  ACTIVE: 2, // vulnerable, can move
  DEAD: 3
};
var flashTimer = 0;
var flashCounter = 0;
var minFlash = 0.25;
var maxFlash = 0.5;

// direction enum
var DIRECTION = {
  RIGHT: 0,
  LEFT: 1
};

var sprite = void 0;
var SPRITES = {};
var _playState = void 0; // player's current play state
var direction = void 0; // facing direction - right or left
var type = void 0; // type can be player1 or player2
var x = 100; // x coordinate of position
var y = 500; // y coordinate of position
var width = 20; // width of bounding box
var height = 30; // height of bounding box
var halfW = 10; // half width of bounding box
var halfH = 15; // half height of bounding box
var collider = {};
var xSpeed = 0; // x component of speed for movement calculations
var ySpeed = 0; // y component of speed for movement calculations
var grounded = true; // currently on the ground?
var ground = 445;
var alive = true;
var _isIt = true;
var canTag = true;
var tagTimer = 0;
var wasColliding = false;
var isColliding = false;
var score = 0;
var numCoins = 0;
var _kills = 0;
var deadAngle = 0;

// init - used for initialization after page loads
// sets the collection of sprites to draw from based
// on type (player 1 or player 2)
//
var init = function init(playerType) {
  _playState = PLAY_STATES.ACTIVE;
  type = playerType;
  if (playerType === 1) {
    makeSprites('p1');
    _isIt = true;
  } else {
    makeSprites('p2');
    _isIt = false;
  }

  collider.x = x;
  collider.y = y;
  collider.width = width;
  collider.height = height;
  collider.halfW = width / 2;
  collider.halfH = height / 2 + 5;
};

// makeSprites - make a sprite for each state
var makeSprites = function makeSprites(pType) {
  for (var i = 0; i < animationStates.length; i++) {
    var sp = pType + '_' + animationStates[i];
    SPRITES[animationStates[i]] = new _animationSprite.AnimationSprite(resources.images[sp].img, // the image
    resources.images[sp].spriteParams);
  }
};

// spawn - set initial conditions for the player based
// on player type (player1 or player2)
//
var spawn = function spawn() {
  if (type === 1) {
    direction = DIRECTION.RIGHT;
    x = 100;
    sprite = SPRITES.idleRight;
    enemy.init(2);
  } else {
    direction = DIRECTION.LEFT;
    x = 700;
    sprite = SPRITES.idleLeft;
    enemy.init(1);
  }
  y = ground - halfH;
  xSpeed = 0;
  ySpeed = 0;
  grounded = true;
};

// draw - calls draw method of the current animationSprite object
// for the player at the current position
//
var draw = function draw(ctx) {
  if (_playState === PLAY_STATES.ACTIVE || flashTimer > minFlash && flashTimer < maxFlash) {
    sprite.draw(ctx, x, y, 0);
  } else if (_playState === PLAY_STATES.DEAD) {
    sprite.draw(ctx, x, y, deadAngle);
  }
};

// animate - based on current speed and direction decides
// which animationSprite to assign for drawing
//
var animate = function animate(dt) {
  x += xSpeed * dt;
  if (direction == DIRECTION.RIGHT) {
    if (grounded) {
      if (xSpeed == 0) sprite = SPRITES.idleRight;else sprite = SPRITES.runRight;
    } else sprite = SPRITES.jumpUpRight;
  } else {
    if (grounded) {
      if (xSpeed == 0) sprite = SPRITES.idleLeft;else sprite = SPRITES.runLeft;
    } else sprite = SPRITES.jumpUpLeft;
  }
};

// gravity - applies steady negative y to pull player towards
// the ground
//
var gravity = function gravity(dt) {
  y -= ySpeed * dt;
  ySpeed -= 600 * dt;
  if (ySpeed < -450) {
    ySpeed = -450;
  }
};

var resolvePlatformCollision = function resolvePlatformCollision(plat) {
  // if we're on our way up, ignore the collision
  if (ySpeed > 0) return;

  if (collider.y + collider.halfH < plat.y) {
    ground = plat.y - plat.halfH;
  }
};

// bounds - checks side bounds as well as grounds the player
//
var bounds = function bounds() {
  if (x - halfW < 0) {
    x = halfW;xSpeed = 0;
  }
  if (x + halfW > 800) {
    x = 800 - halfW;xSpeed = 0;
  }
  if (y > ground - halfH) {
    grounded = true;
    y = ground - halfH;
    ySpeed = 0;
  }

  var onPlat = false;
  var plats = main.getPlats();
  for (var i = 0; i < plats.length; i++) {
    if (utils.collides(collider, plats[i].collider)) {
      resolvePlatformCollision(plats[i]);
      onPlat = true;
      break;
    } else {
      ground = 445;
    }
  }

  if (!onPlat && y + halfH < ground) {
    grounded = false;
  }
};

var checkPlayerCollision = function checkPlayerCollision() {
  if (utils.collides(collider, enemy.collider)) {
    if (collider.y < enemy.collider.y) {
      y = enemy.collider.y - 5 - enemy.collider.height;
    } else if (collider.x < enemy.collider.x) {
      x = enemy.collider.x - 5 - enemy.collider.width;
    } else {
      x = enemy.collider.x + 5 + enemy.collider.width;
    }

    if (canTag) {
      _isIt = false;
      client.tradeIt();
    }
  }
};

var checkCoinCollisions = function checkCoinCollisions() {
  var coins = main.coins;

  for (var i = 0; i < coins.length; i++) {
    if (utils.collides(collider, coins[i].collider)) {
      if (coins[i].active) {
        coins[i].toggleActive();
        client.toggleCoin(i);
        score += 2;
        numCoins += 1;
      }
    }
  }
};

var checkMonsterCollisions = function checkMonsterCollisions() {
  for (var i = 0; i < main.monsters.length; i++) {
    if (utils.collides(collider, main.monsters[i].collider)) {
      // if we're bopping the enemy, jump
      if (y + halfH < main.monsters[i].y && main.monsters[i].alive) {
        grounded = true;
        jump();
        main.monsters[i].die();
        score += 1;
        _kills += 1;
      } else if (main.monsters[i].alive && main.monsters[i].active) {
        if (main.gameType() === 'multi') {
          _playState = PLAY_STATES.FREEZE;
        } else {
          _playState = PLAY_STATES.DEAD;
          xSpeed = 0;
          ySpeed = -50;
        }
      }
    }
  }
};

var becomeIt = function becomeIt(speedData) {
  _isIt = true;
  canTag = false;
  tagTimer = 0;
};

var flash = function flash(dt, numFlashes, min, max, nextState) {
  minFlash = min;maxFlash = max;
  flashTimer += dt;
  if (flashTimer >= maxFlash) {
    flashTimer = 0;
    flashCounter++;
    if (flashCounter >= numFlashes) {
      flashCounter = 0;
      _playState = nextState;
    }
  }
};

// multiUpdate - extra update logic required when in multi-player mode
var multiUpdate = function multiUpdate(dt) {
  // whoever is "it" is responsible for checking collisions between players
  // if you're not it, you're trying to collide with coins
  tagTimer += dt;
  if (tagTimer >= 1.0 && !canTag) {
    canTag = true;
  }

  if (_isIt) {
    checkPlayerCollision();
  } else if (_playState == PLAY_STATES.ACTIVE) {
    // must be active to collect coins
    checkCoinCollisions();
  }

  if (_playState == PLAY_STATES.FREEZE) {
    flash(dt, 4, 0.25, 0.5, PLAY_STATES.IMMUNE);
    friction(dt);
  } else if (_playState == PLAY_STATES.IMMUNE) {
    flash(dt, 8, 0.15, 0.25, PLAY_STATES.ACTIVE);
  }

  client.updatePlayer(x, y, direction, xSpeed, ySpeed, grounded, dt, _playState);
};

// update - looped function that calls necessary movement function
// and sends updates to the server via client (websocket) object
//
var update = function update(dt) {
  animate(dt);
  gravity(dt);

  if (_playState !== PLAY_STATES.DEAD) {
    bounds();
  }

  if (_playState == PLAY_STATES.ACTIVE) {
    // must be active to collide with monsters
    checkMonsterCollisions();
  }

  sprite.update(dt);
  collider.x = x;
  collider.y = y;

  // update logic specific to multiplayer mode
  if (main.gameType() === 'multi') {
    multiUpdate(dt);
  } else if (_playState === PLAY_STATES.DEAD) {
    deadAngle += 5 * dt;
  }
};

// moveLeft - called when player hits a 'left' key. Accelerates
// to the left (150 xSpeed is max)
//
var moveLeft = function moveLeft(dt) {
  direction = DIRECTION.LEFT;
  xSpeed -= 300 * dt;
  if (xSpeed < -150) xSpeed = -150;
};

// moveRight - called when player hits a 'right' key. Accelerates
// to the right (150 xSpeed is max)
//
var moveRight = function moveRight(dt) {
  direction = DIRECTION.RIGHT;
  xSpeed += 300 * dt;
  if (xSpeed > 150) xSpeed = 150;
};

// jump - called when player hits a 'jump' button. Sets y speed
// so next update will move the player upwards
//
var jump = function jump() {
  if (grounded) {
    grounded = false;
    ySpeed = 300;
    ground = 445;
  }
};

// friction - slows the players x movement if they are not
// currently pressing a movement button
//
var friction = function friction(dt) {
  if (xSpeed < 0) {
    if (!grounded) xSpeed += 10 * dt;else {
      xSpeed += 300 * dt;
      if (xSpeed >= 0) xSpeed = 0;
    }
  }
  if (xSpeed > 0) {
    if (!grounded) xSpeed -= 10 * dt;else {
      xSpeed -= 300 * dt;
      if (xSpeed <= 0) xSpeed = 0;
    }
  }
};

var getGrounded = function getGrounded() {
  return grounded;
};

var getType = function getType() {
  return type;
};

var getPos = function getPos() {
  return { x: x, y: y };
};

var setPos = function setPos(_x, _y) {
  x = _x;y = _y;
};

var getSize = function getSize() {
  return { width: width, height: height };
};

// method is called when a collision is reported by 'it' player
// this method will make this player jump if they're above the other player
// it means this player is bouncing on the 'it' player's head
var stopMovement = function stopMovement() {
  xSpeed = 0;
  var enemyPos = enemy.pos();
  var enemySize = enemy.size();
  if (y + halfH < enemyPos.y) {
    ySpeed = 300;
  }
};

var getScore = function getScore() {
  return score;
};

module.exports = {
  init: init,
  spawn: spawn,
  update: update,
  draw: draw,
  moveLeft: moveLeft,
  moveRight: moveRight,
  jump: jump,
  friction: friction,
  collider: collider,
  getGrounded: getGrounded,
  type: getType,
  pos: getPos,
  setPos: setPos,
  size: getSize,
  becomeIt: becomeIt,
  isIt: function isIt() {
    return _isIt;
  },
  stopMovement: stopMovement,
  getScore: getScore,
  coins: function coins() {
    return numCoins;
  },
  kills: function kills() {
    return _kills;
  },
  playState: function playState() {
    return _playState;
  },
  PLAY_STATES: PLAY_STATES
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// imports
var player = __webpack_require__(5);

// keyboard enumeration
var KEYBOARD = {
  KEY_ENTER: 13,
  KEY_LEFT: 37,
  KEY_RIGHT: 39,
  KEY_UP: 38,
  KEY_DOWN: 40,
  KEY_SPACE: 32,
  KEY_A: 65,
  KEY_D: 68,
  KEY_W: 87,
  KEY_S: 83,
  KEY_M: 77
};

// keys being pressed
var keydown = [];

var canMove = true;

// process the input
var processInput = function processInput(dt) {
  if (canMove) {
    // get the keys down and move accordingly
    if (keydown[KEYBOARD.KEY_LEFT] || keydown[KEYBOARD.KEY_A]) {
      player.moveLeft(dt);
    } else if (keydown[KEYBOARD.KEY_RIGHT] || keydown[KEYBOARD.KEY_D]) {
      player.moveRight(dt);
    } else if (player.xSpeed != 0) {
      player.friction(dt);
    }
    if (keydown[KEYBOARD.KEY_SPACE] || keydown[KEYBOARD.KEY_UP] || keydown[KEYBOARD.KEY_W]) {
      player.jump();
    }
  }
};

var stopMove = function stopMove() {
  canMove = false;
};
var startMove = function startMove() {
  canMove = true;
};

module.exports.processInput = processInput;
module.exports.keydown = keydown;
module.exports.KEYBOARD = KEYBOARD;
module.exports.stopMove = stopMove;
module.exports.startMove = startMove;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// client.js
// client side of websocket connection
// handles server messages and emits to server
//

// imports
var main = __webpack_require__(1);
var player = __webpack_require__(5);
var enemy = __webpack_require__(4);
var inputManager = __webpack_require__(6);

// socketio ifo
var socket = void 0;
var name = void 0;
var room = void 0;

// initialize socket
// hook up all socket listeners
var init = function init(playerName, roomname) {
  name = playerName;
  room = roomname;
  socket = io.connect();
  socket.on('connect', connect);
  socket.on('joined', setup);
  socket.on('roomFull', roomFull);
  socket.on('updateEnemy', updateEnemy);
  socket.on('load', load);
  socket.on('start', start);
  socket.on('enemyName', setEnemyName);
  socket.on('otherDisconnect', restart);
  socket.on('becomeIt', becomeIt);
  socket.on('collisionReport', stopMove);
  socket.on('coinToggle', onCoinToggle);
  socket.on('killMonster', killMonster);
  socket.on('timeUpdate', getTimeUpdate);
  socket.on('endGame', endGame);
};

// -- socket event hanlders - for incoming messages from server --

// connect socket event handler
// emits join 'request' to server with the name and room name provided by user
var connect = function connect() {
  socket.emit('join', {
    name: name,
    room: room
  });
};

// setup socket event handler
// callback for the on('joined') event. initializes player
// and then emits ready message to the server
var setup = function setup(data) {
  player.init(data.playerType);
  player.spawn();

  if (data.playerType == 1) {
    // first player to connect is the host
    main.host();
  }
  socket.emit('ready');
};

var roomFull = function roomFull() {
  socket.disconnect();
  $('#fullRoom').show();
  $('#gameOver').show('slide', { direction: 'down' }, 300);
};

// load socket event handler
// presents loading screen to the user while level file is loaded and
// parsed
var load = function load() {
  document.querySelector('#waiting').style.display = 'none';
  document.querySelector('#loading').style.display = 'block';
  main.loadLevel('level');
};

// loaded - event emitter
// called by main when level is loaded so server can coordinate start message
// so that both players start at the same time regardless of load time
var loaded = function loaded() {
  socket.emit('loaded');
};

var start = function start() {
  main.start();
};

var setEnemyName = function setEnemyName(data) {
  main.setEnemyName(data.name);
};

var updatePlayer = function updatePlayer(x, y, direction, xSpeed, ySpeed, grounded, dt, playState) {
  socket.emit('updatePlayer', {
    x: x,
    y: y,
    direction: direction,
    xSpeed: xSpeed,
    ySpeed: ySpeed,
    grounded: grounded,
    dt: dt,
    playState: playState
  });
};

var updateEnemy = function updateEnemy(data) {
  enemy.update(data.x, data.y, data.direction, data.xSpeed, data.ySpeed, data.grounded, data.dt, data.playState);
};

// report to the other player that collision has occured, stops their movement
var reportCollision = function reportCollision() {
  socket.emit('reportCollision');
};

var toggleCoin = function toggleCoin(i) {
  socket.emit('toggleCoin', { index: i });
};

var onCoinToggle = function onCoinToggle(data) {
  console.log('togglecoin');
  main.coins[data.index].toggleActive();
  enemy.enemyScore();
  enemy.enemyScore();
  enemy.enemyCoin();
};

var stopMove = function stopMove() {
  inputManager.stopMove();
  player.stopMovement();
};

var tradeIt = function tradeIt(speedData) {
  socket.emit('tradeIt');
};

var becomeIt = function becomeIt(data) {
  player.becomeIt();
  inputManager.startMove();
};

var deadMonster = function deadMonster(index) {
  socket.emit('deadMonster', { index: index });
};

var killMonster = function killMonster(data) {
  main.monsters[data.index].kill();
  enemy.enemyScore();
  enemy.enemyKill();
};

var updateTime = function updateTime(timeLeft) {
  socket.emit('updateTime', { time: timeLeft });
};

var getTimeUpdate = function getTimeUpdate(data) {
  main.getTimeUpdate(data.time);
};

var endGame = function endGame() {
  main.setStarted(false);
  main.gameOver();
};

var gameOver = function gameOver() {
  socket.emit('gameOver');
};

var updateStats = function updateStats(win, coins, kills) {
  var stats = { win: win, coins: coins, kills: kills, _csrf: $('#csrf').val() };
  console.log(stats);
  $.ajax({
    cache: false,
    type: 'POST',
    url: '/updateStats',
    data: stats,
    dataType: 'json',
    success: function success(result, status, xhr) {
      console.log(result);
    },
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);

      // handleError(messageObj.error);
      console.log(messageObj.error);
    }
  });
};

var restart = function restart() {
  console.log('disconnect');
  if (main.getStarted()) {
    document.querySelector('canvas').style.display = 'none';
    main.setStarted('false');
    socket.disconnect();
    $('#disconnected').show();
    $('#gameOver').show('slide', { direction: 'down' }, 300);
  }
};

module.exports.init = init;
module.exports.loaded = loaded;
module.exports.updatePlayer = updatePlayer;
module.exports.reportCollision = reportCollision;
module.exports.toggleCoin = toggleCoin;
module.exports.deadMonster = deadMonster;
module.exports.tradeIt = tradeIt;
module.exports.updateTime = updateTime;
module.exports.gameOver = gameOver;
module.exports.updateStats = updateStats;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Coin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // coin class


var _animationSprite = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resources = __webpack_require__(0);

var Coin = exports.Coin = function () {

  // constructor for coins
  function Coin(position) {
    _classCallCheck(this, Coin);

    this.x = position.x;
    this.y = position.y;
    this.width = 20;
    this.height = 20;
    this.halfW = 10;
    this.halfH = 10;
    this.active = true;
    this.toggleTimer = 0;
    this.sprite = new _animationSprite.AnimationSprite(resources.images.coin.img, // the image
    resources.images.coin.spriteParams);

    this.collider = {};
    this.collider.x = this.x;
    this.collider.y = this.y;
    this.collider.width = this.width;
    this.collider.height = this.height;
    this.collider.halfW = this.halfW;
    this.collider.halfH = this.halfH;
  }

  // update


  _createClass(Coin, [{
    key: 'update',
    value: function update(dt) {
      if (this.active) {
        this.sprite.update(dt);
      } else {
        this.toggleTimer += dt;
        if (this.toggleTimer > 5) {
          this.toggleActive();
          this.toggleTimer = 0;
        }
      }
    }

    // draw method

  }, {
    key: 'draw',
    value: function draw(ctx) {
      if (this.active) {
        this.sprite.draw(ctx, this.x, this.y, 0);
      }
    }

    // toggle active coin

  }, {
    key: 'toggleActive',
    value: function toggleActive() {
      this.active = !this.active;
    }
  }]);

  return Coin;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Monster = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // monster class


var _animationSprite = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = __webpack_require__(1);
var resources = __webpack_require__(0);
var client = __webpack_require__(7);

var Monster = exports.Monster = function () {

  // constructor for coins
  function Monster(position, direction, bounds, type, index, speed) {
    _classCallCheck(this, Monster);

    this.index = index;

    this.DIRECTION = {
      RIGHT: 0,
      LEFT: 1
    }, this.states = ['runLeft', 'runRight', 'deadLeft', 'deadRight'], this.SPRITES = [];

    this.type = type;
    this.alive = true;
    this.active = true;
    this.direction = direction;
    this.xSpeed = speed;
    this.ySpeed = 0;
    this.x = position.x;
    this.y = position.y;
    this.width = 40;
    this.height = 40;
    this.halfW = 20;
    this.halfH = 20;
    this.ground = this.y;
    this.leftBound = bounds.left;
    this.rightBound = bounds.right;

    if (this.direction === this.DIRECTION.LEFT) {
      this.xSpeed = -this.xSpeed;
    }
    // ensure starting point is within specified bounds
    if (this.x > this.rightBound || this.x < this.leftBound) {
      this.x = (this.rightBound + this.leftBound) / 2;
    }
    this.startPosition = { x: this.x, y: this.y };

    this.collider = {};
    this.collider.x = this.x;
    this.collider.y = this.y;
    this.collider.width = this.width;
    this.collider.height = this.height;
    this.collider.halfW = this.halfW;
    this.collider.halfH = this.halfH;

    this.makeSprites();

    // counter for flashing when not active
    this.flashTimer = 0;
    this.flashCounter = 0;
  }

  // make sprites for
  // b_monster_walkLeft
  // type = b_monster
  // state = walkLeft


  _createClass(Monster, [{
    key: 'makeSprites',
    value: function makeSprites() {
      for (var i = 0; i < this.states.length; i++) {
        var sp = this.type + '_' + this.states[i];
        this.SPRITES[this.states[i]] = new _animationSprite.AnimationSprite(resources.images[sp].img, // the image
        resources.images[sp].spriteParams);
      }

      this.setSprite();
    }
  }, {
    key: 'setSprite',
    value: function setSprite() {
      if (this.direction == this.DIRECTION.RIGHT) {
        this.sprite = this.SPRITES.runRight;
      } else {
        this.sprite = this.SPRITES.runLeft;
      }
    }
  }, {
    key: 'kill',
    value: function kill() {
      this.alive = false;
      if (this.direction == this.DIRECTION.RIGHT) {
        this.sprite = this.SPRITES.deadRight;
      } else {
        this.sprite = this.SPRITES.deadLeft;
      }
    }
  }, {
    key: 'die',
    value: function die() {
      this.kill();
      if (main.gameType() === 'multi') {
        client.deadMonster(this.index);
      }
    }
  }, {
    key: 'respawn',
    value: function respawn() {
      // monsters only respawn in multiplayermode
      if (main.gameType() === 'multi') {
        this.x = this.startPosition.x;
        this.y = this.startPosition.y;
        this.ySpeed = 0;
      }
    }
  }, {
    key: 'moveRight',
    value: function moveRight(dt) {
      this.x += this.xSpeed * dt;
    }
  }, {
    key: 'moveLeft',
    value: function moveLeft(dt) {
      this.x += this.xSpeed * dt;
    }
  }, {
    key: 'fall',
    value: function fall(dt) {
      this.ySpeed = 75;
      this.y += this.ySpeed * dt;
    }
  }, {
    key: 'bounds',
    value: function bounds() {
      if (this.x - this.halfW <= this.leftBound) {
        this.xSpeed = -this.xSpeed;
        this.direction = this.DIRECTION.RIGHT;
        this.x = this.leftBound + 1 + this.halfW;
      } else if (this.x + this.halfW >= this.rightBound) {
        this.xSpeed = -this.xSpeed;
        this.direction = this.DIRECTION.LEFT;
        this.x = this.rightBound - 1 - this.halfW;
      }

      // respawn the monster after they fall a certain amount
      if (this.y > this.ground + 500) {
        this.active = false;
        this.setSprite();
        this.respawn();
      }
    }

    // holds logic for flashing when not active

  }, {
    key: 'flash',
    value: function flash(dt) {
      this.flashTimer += dt;
      if (this.flashTimer >= 0.5) {
        this.flashTimer = 0;
        this.flashCounter++;
        if (this.flashCounter >= 4) {
          // four flashes is 2 seconds
          this.flashCounter = 0;
          this.alive = true;
          this.active = true;
        }
      }
    }

    // update

  }, {
    key: 'update',
    value: function update(dt) {
      if (this.alive) {
        this.setSprite();

        if (this.direction == this.DIRECTION.RIGHT) {
          this.moveRight(dt);
        } else {
          this.moveLeft(dt);
        }
      } else if (this.active) {
        this.fall(dt);
      }

      this.bounds();
      this.sprite.update(dt);

      this.collider.x = this.x;
      this.collider.y = this.y;

      if (!this.active) this.flash(dt);
    }

    // draw method

  }, {
    key: 'draw',
    value: function draw(ctx) {
      if (this.active || this.flashTimer > 0.25 && this.flashTimer < 0.5) {
        this.sprite.draw(ctx, this.x, this.y, 0);
      }
    }
  }]);

  return Monster;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// platform class

var Platform = exports.Platform = function () {
  function Platform(img, settings) {
    _classCallCheck(this, Platform);

    this.image = img;
    this.x = settings.x;
    this.y = settings.y;
    this.width = settings.width;
    this.height = 25;
    this.halfW = this.width / 2;
    this.halfH = this.height / 2;
    this.collider = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      halfW: this.halfW,
      halfH: this.halfH
    };
  }

  // draw method


  _createClass(Platform, [{
    key: "draw",
    value: function draw(ctx, x, y) {
      ctx.save();
      ctx.drawImage(this.image, this.x - this.halfW, this.y - this.halfH, this.width, this.height);
      ctx.restore();
    }
  }]);

  return Platform;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// screenManager.js
// screenManager is used for drawing background
// and any necessary hud/menu options
//
// imports
var resources = __webpack_require__(0);
var main = __webpack_require__(1);
var player = __webpack_require__(5);
var enemy = __webpack_require__(4);
var utils = __webpack_require__(2);

var fillText = function fillText(context, string, x, y, font, alpha, strokeWeight, align) {
  var ctx = context;
  ctx.save();
  ctx.textAlign = align;
  ctx.font = font;
  ctx.strokeStyle = 'rgba(0,0,0,' + alpha + ')';
  ctx.lineWidth = strokeWeight;
  ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
  ctx.strokeText(string, x, y);
  ctx.fillText(string, x, y);
  ctx.restore();
};

var drawBackground = function drawBackground(context, img) {
  var ctx = context;
  ctx.save();
  ctx.drawImage(img, 0, 0);
  ctx.restore();
};

var drawHud = function drawHud(ctx) {
  var leftName = void 0;
  var rightName = void 0;
  var leftScore = void 0;
  var rightScore = void 0;

  if (player.type() == 1) {
    leftName = main.getPlayerName();
    leftScore = player.getScore();
    rightName = main.getEnemyName();
    rightScore = enemy.getScore();
  } else {
    leftName = main.getEnemyName();
    leftScore = enemy.getScore();
    rightName = main.getPlayerName();
    rightScore = player.getScore();
  }

  var timeString = utils.timerAsString(main.timer());

  fillText(ctx, leftName + ': ' + leftScore, 10, 50, '50px Bangers, sans-serif', 255, 2, 'left');
  fillText(ctx, rightName + ': ' + rightScore, 790, 50, '50px Bangers, sans-serif', 255, 2, 'right');
  fillText(ctx, timeString, 400, 50, '50px Bangers, sans-serif', 255, 2, 'center');

  var playerName = main.getPlayerName();
  var enemyName = main.getEnemyName();

  fillText(ctx, playerName, player.pos().x, player.pos().y - player.collider.height + 5, '20px Bangers, sans-serif', 255, 2, 'center');
  fillText(ctx, enemyName, enemy.pos().x, enemy.pos().y - enemy.collider.height + 5, '20px Bangers, sans-serif', 255, 2, 'center');
};

var drawPlay = function drawPlay(context, dt) {
  var ctx = context;
  drawBackground(ctx, resources.images.bg_backgroundImage);

  // draw platforms
  var plats = main.getPlats();
  for (var i = 0; i < plats.length; i++) {
    plats[i].draw(ctx);
  }

  // draw monsters
  var monsters = main.monsters;
  for (var _i = 0; _i < monsters.length; _i++) {
    monsters[_i].draw(ctx);
  }

  if (main.gameType() === 'multi') {
    drawHud(ctx);
    // draw coins

    var coins = main.coins;
    for (var _i2 = 0; _i2 < coins.length; _i2++) {
      coins[_i2].draw(ctx);
    }

    // if player is it, draw the halo around player
    // else draw the halo around the enemy
    if (player.isIt()) {
      ctx.save();
      ctx.drawImage(resources.images.halo, player.pos().x - player.size().width / 2 - 10, player.pos().y - player.size().height / 2 - 10);
      ctx.restore();
    } else {
      ctx.save();
      ctx.drawImage(resources.images.halo, enemy.pos().x - enemy.size().width / 2 - 10, enemy.pos().y - enemy.size().height / 2 - 10);
      ctx.restore();
    }

    enemy.draw(ctx);
  }

  player.draw(ctx);
};

module.exports.drawPlay = drawPlay;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// loader.js
// used to preload resources and initialize all other objects
// and references
//

// imports
var main = __webpack_require__(1);
var utils = __webpack_require__(2);
var InputManager = __webpack_require__(6);
var resources = __webpack_require__(0);

var loadPage = function loadPage() {
  // Preload Images and Sound
  var queue = new createjs.LoadQueue(false);
  queue.on('complete', function (e) {
    // resources must be set before other modules can initialize as they rely on
    // resources being initialized
    resources.init();

    // sprites have been initialized so other scripts may reference them now
    var gameType = '' + document.querySelector('#gametype').value;
    main.init(gameType);

    // done loading so don't show loading anymore
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#waiting').style.display = 'block';
  });

  // load images
  queue.loadManifest([{ id: 'bg_backgroundImage', src: resources.imagePaths.bg_backgroundImage }, { id: 'bg_platImage', src: resources.imagePaths.bg_platImage }, { id: 'haloImage', src: resources.imagePaths.haloImage }, { id: 'coinImage', src: resources.imagePaths.coinImage }, { id: 'p1_idleRightImage', src: resources.imagePaths.p1_idleRightImage }, { id: 'p1_idleLeftImage', src: resources.imagePaths.p1_idleLeftImage }, { id: 'p1_jumpUpRightImage', src: resources.imagePaths.p1_jumpUpRightImage }, { id: 'p1_jumpUpLeftImage', src: resources.imagePaths.p1_jumpUpLeftImage }, { id: 'p1_jumpFallRightImage', src: resources.imagePaths.p1_jumpFallRightImage }, { id: 'p1_jumpFallLeftImage', src: resources.imagePaths.p1_jumpFallLeftImage }, { id: 'p1_runRightImage', src: resources.imagePaths.p1_runRightImage }, { id: 'p1_runLeftImage', src: resources.imagePaths.p1_runLeftImage }, { id: 'p2_idleRightImage', src: resources.imagePaths.p2_idleRightImage }, { id: 'p2_idleLeftImage', src: resources.imagePaths.p2_idleLeftImage }, { id: 'p2_jumpUpRightImage', src: resources.imagePaths.p2_jumpUpRightImage }, { id: 'p2_jumpUpLeftImage', src: resources.imagePaths.p2_jumpUpLeftImage }, { id: 'p2_jumpFallRightImage', src: resources.imagePaths.p2_jumpFallRightImage }, { id: 'p2_jumpFallLeftImage', src: resources.imagePaths.p2_jumpFallLeftImage }, { id: 'p2_runRightImage', src: resources.imagePaths.p2_runRightImage }, { id: 'p2_runLeftImage', src: resources.imagePaths.p2_runLeftImage }]);

  // event listeners
  // stop enter key from affecting elements other than the canvas
  document.onkeydown = function (e) {
    var x = e.which;
    if (x == 13) {
      e.preventDefault();
    }
  };

  document.querySelector('#roominput').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      document.querySelector('#connect').click();
    }
  });

  window.addEventListener('keydown', function (e) {
    InputManager.keydown[e.keyCode] = true;
  });

  window.addEventListener('keyup', function (e) {
    InputManager.keydown[e.keyCode] = false;
  });
};

loadPage();

/***/ })
/******/ ]);