const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  profile_icon: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  uploaded_at: {
    type: String,
    required: true,
    default: new Date(),
  },
  message: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.export = Comment;
