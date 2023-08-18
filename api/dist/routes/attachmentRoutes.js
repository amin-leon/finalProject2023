"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("multer"));
var _attachmentController = _interopRequireDefault(require("../controllers/attachmentController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// attachmentRoutes.js

var router = _express["default"].Router();

// Multer configuration
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'attachedDocs/');
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = (0, _multer["default"])({
  storage: storage
});

// Route to handle file upload
router.post('/upload', upload.single('attachment'), _attachmentController["default"]);
var _default = router;
exports["default"] = _default;