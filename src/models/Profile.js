const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const _ = require('underscore');

let ProfileModel = {};

// convert string ID to real mongo ID
const convertId = mongoose.Types.ObjectId;
const setDisplayName = displayName => _.escape(displayName).trim();

const ProfileSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
    set: setDisplayName,
  },

  numWins: {
    type: Number,
    min: 0,
    required: true,
  },

  numLosses: {
    type: Number,
    min: 0,
    required: true,
  },

  coinsGot: {
    type: Number,
    min: 0,
    required: true,
  },

  monstersKilled: {
    type: Number,
    min: 0,
    required: true,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

ProfileSchema.statics.toAPI = doc => ({
  displayName: doc.displayName,
  numWins: doc.numWins,
  numLosses: doc.numLosses,
  coinsGot: doc.coinsGot,
  monstersKilled: doc.monstersKilled,
});

ProfileSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return ProfileModel.findOne(search).select('displayName numWins numLosses coinsGot monstersKilled').exec(callback);
};

ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports.ProfileModel = ProfileModel;
module.exports.ProfileSchema = ProfileSchema;
