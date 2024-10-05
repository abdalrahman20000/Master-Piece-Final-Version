const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  text: { type: String, required: true },
  senderType: { type: String },
  time: { type: Date, required: true },
}, { timestamps: true });

const chatSchema = new Schema({
  learner: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  mentor: { type: Schema.Types.ObjectId, required: true, ref: 'Mentor' },
  messages: [messageSchema]
}, { timestamps: true });

const Chat = model('Chat', chatSchema);

module.exports = Chat;
