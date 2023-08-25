// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
  
//   firstName: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },
//   secondName: {
//     type: String,
//     required: true,
//   },


//   // role: {
//   //   type: String,
//   //   required: true,
//   //   enum: ['leader', 'student'], default: 'student'
//   // },

//   // profileImage: {
//   //   type: String,
    
//   // },

//   // contactNumber: {
//   //   type: String,
//   // },

//   // dateOfBirth: {
//   //   type: String,
//   // },

//   isActive: {
//     type: Boolean,
//     default: true,
//   },

//   notificationPreferences: {
//     email: {
//       type: Boolean,
//       default: true,
//     },
//     inApp: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   createdAt: { type: Date, default: Date.now }, // Timestamp for user creation
//   updatedAt: { type: Date, default: Date.now },

// }, {timestamp: true});

//  const User = mongoose.model('User', userSchema);

//  export default User;

import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_TOKEN, {
    expiresIn: "7d",
  });
  return token;
};

 const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data); 
};

export { User, validate };
