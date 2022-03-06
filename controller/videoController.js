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
    const Videos = await Video.find({}).populate("channel_id").exec();
    res.json(Videos);
  } catch (error) {
    next(error);
  }
};

const videoDetails = async (req, res, next) => {
  try {
    const videoDetails = await Video.find({ _id: req.body.id })
      .populate("channel_id")
      .exec();
    res.send(videoDetails);
  } catch (error) {
    next(error);
  }
};

const updateLike = async (req, res, next) => {
  try {
    const like = await Video.findByIdAndUpdate(
      { _id: req.body.id },
      { like: req.body.like + 1 }
    ).exec();
    res.send(like);
  } catch (error) {
    next(error);
  }
};

const updateDislike = async (req, res, next) => {
  try {
    const dislike = await Video.findByIdAndUpdate(
      { _id: req.body.id },
      { dislike: req.body.dislike + 1 }
    ).exec();
    res.send(dislike);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addVideo,
  getAllVideos,
  videoDetails,
  updateLike,
  updateDislike,
};
