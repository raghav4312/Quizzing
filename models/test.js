const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Test = new Schema({
  topic:{
    type:String,
    required:true
  },
  uid:{
    type:String,
    required:true
  },
  questions:Array,
  date:{
    type:Date,
    required:true,
    default:Date.now
  },
  isActive:{
    type:Boolean,
    default:true
  }
})

let test = mongoose.model('test',Test);

module.exports = test;