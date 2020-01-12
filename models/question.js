const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Question = new Schema({
  name:{
    type:String,
    required:true
  },
  ques:{
    type:String,
    required:true
  },
  options:{
    type:Array,
    required:true
  },
  answer:{
    type:String,
    required:true
  },
  topic:Array,
  isActive:{
    type:Boolean,
    default:true
  }
})

module.exports = mongoose.model('question',Question);