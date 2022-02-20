const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ih4w7.mongodb.net/nodeLearning?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("server connected with mongoose");
  })
  .catch((err) => {
    console.log("error ", err);
  });

//create channel database

const channelSchema = mongoose.Schema({
  created_by: {
    type: String,
    required: true,
  },

  channel_name: {
    type: String,
    required: true,
    unique: true,
  },

  subscriber: {
    type: Number,
    required: true,
  },
});

const Channel = mongoose.model("Channel", channelSchema);

//create channel

app.post("/create-channel", async (req, res) => {
  try {
    const channel_info = new Channel(req.body);
    await channel_info.save();
    res.send(channel_info);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

//get channels

app.get("/get-channels", async (req, res) => {
  const getChannels = await Channel.find({}).exec();
  res.json(getChannels);
});

//create video database
const VideoSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  channel_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  like: {
    type: Number,
    required: true,
    default: 0,
    default: 0,
  },
  dislike: {
    type: Number,
    required: true,
    default: 0,
  },
  views: {
    type: Number,
    required: true,
    default: 0,
  },

  created_at: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Video = mongoose.model("Video", VideoSchema);

app.post("/add-videos", async (req, res) => {
  const document = new Video(req.body);
  await document.save();
  res.send(document);
});

//get videos

app.get("/get-videos", async (req, res) => {
  const getVideos = await Video.find({}).exec();
  res.json(getVideos);
});

//get data of any one videocard

app.post("/get-video-details", async (req, res) => {
  const videoDetails = await Video.find({ _id: req.body._id }).exec();
  res.send(videoDetails);
});

//update videos using postman

app.post("/update-channel-id", async (req, res) => {
  const channelId = await Video.findByIdAndUpdate(
    { _id: req.body.video_id },
    {
      $set: {
        channel_id: req.body.channel_id,
      },
    }
  );
  await channelId.save();
  res.json(channelId);
});

app.listen(5000, (err) => {
  console.log("server created sucessfully");
});
