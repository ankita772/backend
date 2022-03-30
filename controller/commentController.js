const Comment = require("../model/comment");

const addComment = async (req, res, next) => {
  try {
    const { videoId, message } = req.body;
    const document = new Comment({
      user_id: req.user._id,
      video_id: videoId,
      message: message,
    });
    await document.save();
    res.send(document);
  } catch (err) {
    next(err);
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const { videoId } = req.body;
    const data = await Comment.find({ video_id: videoId }).exec();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports = { addComment, getAllComments };
