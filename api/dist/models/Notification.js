"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var notificationSchema = new _mongoose["default"].Schema({
  recipient: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issue: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Issue',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  isRead: {
    type: Boolean,
    "default": false
  }
});

// Create the Notification Model
var Notification = _mongoose["default"].model('Notification', notificationSchema);
module.exports = Notification;