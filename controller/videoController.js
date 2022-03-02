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

const getAllVideos = async (req, res, next) => {
  try {
    const Videos = await Video.find({}).exec();
    res.json(Videos);
  } catch (error) {
    next(error);
  }
};

const videoDetails = async (req, res, next) => {
  try {
    const videoDetails = await Video.find({ _id: req.body.id }).exec();
    res.send(videoDetails);
  } catch (error) {
    next(error);
  }
};

module.exports = { addVideo, getAllVideos, videoDetails };
