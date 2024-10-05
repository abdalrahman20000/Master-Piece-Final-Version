const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  picture: { type: String, default: null },
  session_type: String,
  available_hours: { type: Number, default: 0 },
  hours_counter: { type: Number, default: 0 },
  session_type: { type: String, default: "c" },
  sessions_counter: { type: Number, default: 0 },
  mentors: [{ type: Schema.Types.ObjectId, ref: 'Mentor' }],
  topics: [{ type: String }],
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
  favorite_mentors: [{ type: Schema.Types.ObjectId, ref: 'Mentor' }],
  isActive: { type: Boolean, default: false },
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;
