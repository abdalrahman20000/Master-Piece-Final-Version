const { Schema, model, default: mongoose } = require("mongoose");

const subSchema = new Schema({
  user_id: String,
  sub_type: String,
  session_type: String,
  price: String,
  hours: String,
}, { timestamps: true });

const Subscription = model("subscription", subSchema);

module.exports = Subscription;
