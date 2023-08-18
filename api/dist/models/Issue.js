"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var issueSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  // Status - The status of the issue (e.g., open, in progress, closed) to track its progress and current state
  status: {
    type: String,
    "enum": ['open', 'in progress', 'closed'],
    "default": 'open'
  },
  // Priority - The priority level of the issue (e.g., low, medium, high) to determine its urgency and importance
  priority: {
    type: String,
    "enum": ['low', 'medium', 'high'],
    "default": 'medium'
  },
  submittedBy: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    // Reference to the User Model
    required: true
  },
  assignedTo: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    // Reference to the User Model
    "default": "none"
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date
  },
  comments: [{
    user: {
      type: _mongoose["default"].Schema.Types.ObjectId,
      ref: 'User' // Reference to the User Model
    },

    timestamp: {
      type: Date,
      "default": Date.now
    },
    text: {
      type: String,
      required: true
    }
  }],
  attachments: [{
    filename: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }],
  notificationRecipients: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User' // Reference to the User Model
  }],

  escalationLevel: {
    type: Number,
    "default": 1
  },
  resolution: {
    type: String
  },
  closedAt: {
    type: Date
  }
});
var Issue = _mongoose["default"].model('Issue', issueSchema);
module.exports = Issue;