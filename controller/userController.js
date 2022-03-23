const generateAuthToken = require("../config/utility");
const User = require("../model/user");

const addUser = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;
    const userInfo = new User({ name, email, password, phone });
    await userInfo.save();
    res.status(201).json(userInfo);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && user.password === password) {
      const token = generateAuthToken(user);
      res.status(200).json({
        token: token,
        user: user,
      });
    } else {
      res.status(400).json({
        message: "User does not exist",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { addUser, loginUser };
