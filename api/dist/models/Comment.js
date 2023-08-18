"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _Issue = _interopRequireDefault(require("../models/Issue"));
var _User = _interopRequireDefault(require("../models/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var commentSchema = new _mongoose["default"].Schema({
  issue: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _Issue["default"],
    required: true
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: _User["default"],
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var Comment = _mongoose["default"].model("Comment", commentSchema);
module.exports = Comment;