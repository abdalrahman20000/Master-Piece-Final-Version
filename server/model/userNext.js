const { Schema, model } = require("mongoose");

const userNextSchema = new Schema({
  email: String,
  password: String,
}, { timestamps: true });

const UserNext = model("UserNext", userNextSchema);

module.exports = UserNext;
