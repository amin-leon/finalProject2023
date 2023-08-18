import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  // Status - The status of the issue (e.g., open, in progress, closed) to track its progress and current state
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open',
  },

  // Priority - The priority level of the issue (e.g., low, medium, high) to determine its urgency and importance
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },

  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User Model
    required: true,
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User Model
    default: "none"
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
  },

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User Model
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],

  attachments: [
    {
      filename: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  notificationRecipients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User Model
    },
  ],

  escalationLevel: {
    type: Number,
    default: 1,
  },

  resolution: {
    type: String,
  },

  closedAt: {
    type: Date,
  },
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
