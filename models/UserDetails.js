const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserDetails = new Schema({
  UserName : {type:String},
  Email : {type:String},
  Password : {type:String}
});

module.exports = mongoose.model('UserDetail',UserDetails);