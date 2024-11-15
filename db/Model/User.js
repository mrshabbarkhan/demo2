// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  language: { type: String, required: true },
  fullName: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  email: { type: String, required: true},
  dematStatus: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
