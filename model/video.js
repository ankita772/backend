const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  channel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Channel",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  like: {
    type: Number,
    required: true,
    default: 0,
    default: 0,
  },
  dislike: {
    type: Number,
    required: true,
    default: 0,
  },
  views: {
    type: Number,
    required: true,
    default: 0,
  },

  created_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
