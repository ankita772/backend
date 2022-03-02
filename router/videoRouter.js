const express = require("express");
const router = new express.Router();
const controller = require("../controller/videoController");

router.post("/add-videos", controller.addVideo);

//get videos

router.get("/get-all-videos", controller.getAllVideos);

//get data of any one videocard

router.post("/get-video-details", controller.videoDetails);

module.exports = router;
