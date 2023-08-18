"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import express from 'express';
// import multer from 'multer';
// import userController from '../controllers/userController.js';

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// // Create a user with image upload
// router.post('/register', upload.single('profileImage'), userController.createUser);
// router.post('/login', userController.loginUser);
// // router.patch('/userUpdate/:id', upload.single('profileImage'), userController.updateUserProfile);

// export default router;

var router = _express["default"].Router();
// User Routes
router.post('/register', _userController["default"].createUser); // Create a new user
router.get("/all", _userController["default"].getAllUsers); // Get all users
router.get("/singleUser/:id", _userController["default"].getUserById); // Get a user by ID
router.put("/userUpdate/:id", _userController["default"].updateUserById); // Update a user by ID
router["delete"]("/deleteUser/:id", _userController["default"].deleteUserById); // Delete a user by ID

// User Profile Picture Upload Route
// router.post("/users/:id/upload", uploadProfilePicture, updateProfilePictureById);

// User Login Route
router.post("/login", _userController["default"].loginUser);
var _default = router;
exports["default"] = _default;