const express = require("express");
const app = express();
require("./config/db");
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
//import database

const channelRouter = require("./router/channelRouter");
const videoRouter = require("./router/videoRouter");
const userRouter = require("./router/userRouter");
const commentRouter = require("./router/commentRouter");

//use Database

app.use(channelRouter);
app.use(videoRouter);
app.use(userRouter);
app.use(commentRouter);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stacktrace: err.stack,
  });
  next();
});

app.listen(5000, (err) => {
  console.log("server created sucessfully");
});
