const mongoose = require("mongoose");

const channelSchema = mongoose.Schema({
  created_by: {
    type: String,
    required: true,
  },

  channel_name: {
    type: String,
    required: true,
    unique: true,
  },

  subscriber: {
    type: Number,
    required: true,
  },
});

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
