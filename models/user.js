const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let User = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  dp:{
    type:String,
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  gender:{
    type:String
  },
  history:[{
    test:Array,
    score:Number
  }],
  isActive:{
    type:Boolean,
    default:true
  }
})

let user = mongoose.model('user',User);
module.exports = user;