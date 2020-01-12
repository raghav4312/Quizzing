const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Topic = new Schema({
  name:{
    type:String,
    required:true
  },
  questions:Array,
  isActive:{
    type:Boolean,
    default:true
  }
})

module.exports = mongoose.model('topic',Topic);