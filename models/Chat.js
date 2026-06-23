const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  question:String,
  answer:String,
  createdAt:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("Chat", chatSchema);