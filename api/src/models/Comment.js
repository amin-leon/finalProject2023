import mongoose from "mongoose";
import Issue from './Issue'


const commentSchema = new mongoose.Schema({
    issue:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Issue,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment:{
        type: String,
        required: true
    }
},{timestamps: true})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment