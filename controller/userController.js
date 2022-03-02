const User = require("../model/user");

const createUser = async (req, res, next) => {
  try {
    const userInfo = new User(req.body);
    await userInfo.save();
    res.send(userInfo);
  } catch (error) {
    next(error);
  }
};
module.exports = { createUser };
