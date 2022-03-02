const { Mongoose } = require("mongoose");
const Channel = require("../model/channel");

const createChannel = async (req, res, next) => {
  try {
    const channel_info = new Channel(req.body);
    await channel_info.save();
    res.send(channel_info);
  } catch (error) {
    next(error);
  }
};

const getUniqueChannel = async (req, res, next) => {
  try {
    const channelDetail = await Channel.find({ _id: req.body.id }).exec();
    res.send(channelDetail);
  } catch (error) {
    next(error);
  }
};
module.exports = { createChannel, getUniqueChannel };
