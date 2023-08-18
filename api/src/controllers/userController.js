import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import asyncHandler from 'express-async-handler'

// Multer configuration for profile picture uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Folder where profile pictures will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname); // Unique filename with original extension
  },
});

const upload = multer({ storage });

// Controller for creating a new user with profile picture upload
 const createUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      role,
      contactNumber,
      dateOfBirth,
      isActive,
      notificationPreferences,
    } = req.body;

    // Check if the user already exists with the provided email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists." });
    }

    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); 

    // Create a new user with the provided data
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword, // Save the hashed password in the database
      role,
      contactNumber,
      dateOfBirth,
      isActive,
      notificationPreferences,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully.", user: newUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user." });
  }
};

// Controller for updating a user's profile picture by ID
 const uploadProfilePicture = upload.single("profileImage"); // 'profileImage' is the name attribute in the file input field

 const updateProfilePictureById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists with the provided ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // If the user already has a profile picture, delete the previous one
    if (user.profileImage) {
      // Add code here to delete the previous profile image file from storage
    }

    // Set the user's profile picture filename to the uploaded file's filename
    user.profileImage = req.file.filename;

    // Save the updated user to the database
    await user.save();

    res.status(200).json({ message: "Profile picture updated successfully.", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update profile picture." });
  }
};


// Controller for fetching all users
 const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users." });
  }
};

 const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user." });
  }
};


 const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Update the user's data
    Object.assign(user, updates);

    await user.save();

    res.status(200).json({ message: "User updated successfully.", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update user." });
  }
};

 const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Delete the user's profile picture if available
    if (user.profileImage) {
      // Add code here to delete the profile image file from storage
    }

    // Delete the user from the database
    await user.deleteOne({_id: userId});

    res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete user." });
  }
};


// Controller for user login
 const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists with the provided email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    // Generate a JSON Web Token (JWT) for the user
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_ACCESS_TOKEN);

    res.status(200).json({ message: "Login successful.", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed." });
  }
};

const currentUser = asyncHandler(async (req, res) => {
  res.json({Message: "Welcome User", User: req.user});
});

export default{
  createUser,
  uploadProfilePicture,
  updateProfilePictureById,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUser,
  upload,
  currentUser
};
