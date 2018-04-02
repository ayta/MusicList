const mongoose = require('mongoose');

const Schema = new mongoose.Schema();
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
