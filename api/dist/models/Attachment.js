"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// attachmentModel.js

var attachmentSchema = new _mongoose["default"].Schema({
  attachment: {
    type: String,
    required: true
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issue: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Issue',
    required: true
  }
});
var Attachment = _mongoose["default"].model('Attachment', attachmentSchema);
module.exports = Attachment;