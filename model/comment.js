const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
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
