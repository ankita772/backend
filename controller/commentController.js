const Comment = require("../model/comment");

const addComment = async (req, res, next) => {
  try {
    const document = new Comment(req.body);
    await document.save();
    res.send(document);
  } catch (err) {
    next(error);
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const data = await Comment.find({}).exec();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports = { addComment, getAllComments };
