import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },


  // role: {
  //   type: String,
  //   required: true,
  //   enum: ['leader', 'student'], default: 'student'
  // },

  // profileImage: {
  //   type: String,
    
  // },

  // contactNumber: {
  //   type: String,
  // },

  // dateOfBirth: {
  //   type: String,
  // },

  isActive: {
    type: Boolean,
    default: true,
  },

  notificationPreferences: {
    email: {
      type: Boolean,
      default: true,
    },
    inApp: {
      type: Boolean,
      default: true,
    },
  },
  createdAt: { type: Date, default: Date.now }, // Timestamp for user creation
  updatedAt: { type: Date, default: Date.now },

}, {timestamp: true});

 const User = mongoose.model('User', userSchema);

 export default User;
