const Video = require("../model/video");
const addVideo = async (req, res, next) => {
  try {
    const document = new Video(req.body);
    await document.save();
    res.send(document);
  } catch (error) {
    next(error);
  }
};

const getVideo = async (req, res, next) => {
  try {
    const getVideos = await Video.find({}).exec();
    res.json(getVideos);
  } catch (error) {
    next(error);
  }
};

const videoDetails = async (req, res, next) => {
  try {
    const videoDetails = await Video.find({ _id: req.body._id }).exec();
    res.send(videoDetails);
  } catch (error) {
    next(error);
  }
};

const updateChannel = async (req, res, next) => {
  try {
    const channelId = await Video.findByIdAndUpdate(
      { _id: req.body.video_id },
      {
        $set: {
          channel_id: req.body.channel_id,
        },
      }
    );
    await channelId.save();
    res.json(channelId);
  } catch (error) {
    next(error);
  }
};

module.exports = { addVideo, getVideo, videoDetails, updateChannel };
