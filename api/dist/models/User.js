"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    "enum": ['leader', 'student'],
    "default": 'student'
  },
  profileImage: {
    type: String
  },
  contactNumber: {
    type: String
  },
  dateOfBirth: {
    type: String
  },
  isActive: {
    type: Boolean,
    "default": true
  },
  notificationPreferences: {
    email: {
      type: Boolean,
      "default": true
    },
    inApp: {
      type: Boolean,
      "default": true
    }
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  // Timestamp for user creation
  updatedAt: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamp: true
});
var User = _mongoose["default"].model('User', userSchema);
var _default = User;
exports["default"] = _default;