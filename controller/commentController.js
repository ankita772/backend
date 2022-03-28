const Comment = require("../model/comment");

const addComment = async (req, res, next) => {
  try {
    const { message } = req.body;

    const document = new Comment({
      user_id: req.user._id,
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
    const data = await Comment.find({}).populate("user_id").exec();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports = { addComment, getAllComments };
