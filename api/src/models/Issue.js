
import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String ,
    // ref: "User", // Reference to the User model mongoose.Schema.Types.ObjectId
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true,
  },
  attachment: String,
}, { timestamps: true }); // Include timestamps for createdAt and updatedAt

const Issue = mongoose.model("Issue", issueSchema);

export const validateIssue = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
    category: Joi.string().required().label("Category"),
    status: Joi.string().oneOf(["open", "closed", "in progress"], "Invalid status value"),
    assignedTo: Joi.string().required().label("Assigned To"),
    priority: Joi.string().valid("low", "medium", "high").required().label("Priority"),
    attachment: Joi.string(),
  });
  return schema.validate(data);
};

export default Issue;

