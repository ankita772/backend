const User = require("../model/user");
const jwt = require("jsonwebtoken");

const authorise = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
      return res
        .status(401)
        .json({ status: 401, message: "The user not logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_KEY, async (err, payload) => {
      try {
        let user = {};
        if (payload) {
          user = await User.findById(payload._id).exec();
        }
        req.user = user;
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ status: 401, message: "The user does not exist" });
      }
    });
  } catch (error) {
    return res
      .status(401)
      .json({ status: 401, message: "The user does not exist" });
  }
};

module.exports = authorise;
