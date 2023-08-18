// attachmentController.js
import Attachment from '../models/Attachment';
import User from '../models/User';
import Issue from '../models/Issue';

// Controller function to handle file upload
 const uploadAttachment = async (req, res) => {
  try {
    const userId = req.body.user; // Make sure the key 'userId' matches the one used in Postman
    const issueId = req.body.issue; // Make sure the key 'issueId' matches the one used in Postman

    // Check if the provided userId and issueId exist in the database
    const user = await User.findOne({_id:userId});
    const issue = await Issue.findOne({_id:issueId});

    if (!user || !issue) {
      return res.status(404).json({ message: 'User or Issue not found' });
    }

    // Create an attachment record in the database
    const newAttachment = new Attachment({
      attachment: req.file.path, // Store the binary data of the file in the 'attachment' field
      user: userId, // Associate the attachment with the specific user
      issue: issueId, // Associate the attachment with the specific issue
    });

    // Save the attachment in the database
    const savedAttachment = await newAttachment.save();

    res.status(201).json(savedAttachment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to upload attachment', error: err });
  }
};

module.exports = uploadAttachment;