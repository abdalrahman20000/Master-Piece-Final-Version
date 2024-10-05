const { Schema, model } = require("mongoose");

const mentorSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  picture: { type: String, default: null },
  introVideo: { type: String, trim: true },
  cv: { type: String, trim: true }, // URL to uploaded CV
  experience: { type: Number, min: 0 },
  briefAbout: { type: String, trim: true },
  isActive: { type: Boolean, default: false },
  isAccepted: { type: Boolean, default: false },
  sessions_counter: { type: Number, default: 0 },
  hours_counter: { type: Number, default: 0 },
  session_started: { type: Boolean, default: false },
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
  expertise: [{ type: String }],
  title: { type: String },
}, { timestamps: true });

const Mentor = model('Mentor', mentorSchema);

module.exports = Mentor;