// attachmentModel.js
import mongoose  from 'mongoose'

const attachmentSchema = new mongoose.Schema({
  attachment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issue: { type: mongoose.Schema.Types.ObjectId, ref: 'Issue', required: true },
});

const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;
