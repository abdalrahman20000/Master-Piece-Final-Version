const { Schema, model } = require("mongoose");

const sessionSchema = new Schema({
  mentor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Mentor' },
  topic: String,
  topic_subject: String,
  is_reserved: { type: Boolean, default: false },
  session_picture: { type: String, default: null },
}, { timestamps: true });

const Session = model('Session', sessionSchema);

module.exports = Session;
