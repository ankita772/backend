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

const getChannel = async (req, res, next) => {
  try {
    const getChannels = await Channel.find({}).exec();
    res.json(getChannels);
  } catch (error) {
    next(error);
  }
};

module.exports = { createChannel, getChannel };
