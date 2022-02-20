const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./config/db");
app.use(express.json());
const channelRouter = require("./router/channelRouter");
const videoRouter = require("./router/videoRouter");
app.use(channelRouter);
app.use(videoRouter);
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
