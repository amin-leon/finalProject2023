"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connectMongo = require("./config/connectMongo");
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));
var _issueRoutes = _interopRequireDefault(require("./routes/issueRoutes"));
var _attachmentRoutes = _interopRequireDefault(require("./routes/attachmentRoutes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Assuming the attachmentRoutes.js is in the same directory

_dotenv["default"].config();
var app = (0, _express["default"])();
var port = process.env.PORT;
app.use(_bodyParser["default"].json());

// database connection 
(0, _connectMongo.connectDB)();
app.use('/uploads', _express["default"]["static"]('./uploads'));

// Routes
app.use("/api/users", _userRoutes["default"]);
app.use('/api/issues', _issueRoutes["default"]);
app.use('/api/attachments', _attachmentRoutes["default"]);

// server is running
app.listen(port, function () {
  console.log("app is listening to port ".concat(port));
});