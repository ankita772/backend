const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  uploaded_at: {
    type: String,
    required: true,
    default: new Date(),
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
