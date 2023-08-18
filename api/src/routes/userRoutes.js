import express from "express";
const router = express.Router();
import userController from "../controllers/userController";
import validateToken from '../middleware/validateTokenHandler';

// User Routes
router.post('/register', userController.upload.single("profileImage"), userController.createUser); // Create a new user
router.get("/all",validateToken, userController.getAllUsers); // Get all users
router.get("/singleUser/:id", userController.getUserById); // Get a user by ID
router.put("/userUpdate/:id", userController.updateUserById); // Update a user by ID
router.delete("/deleteUser/:id", userController.deleteUserById); // Delete a user by ID
router.get("/current", validateToken, userController.currentUser)
// User Profile Picture Upload Route
router.post("/:id/upload", userController.uploadProfilePicture, userController.updateProfilePictureById);

// User Login Route
router.post("/login", userController.loginUser);


export default router;

