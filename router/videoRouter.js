const express = require("express");
const router = new express.Router();
const controller = require("../controller/videoController");

router.post("/add-videos", controller.addVideo);

//get videos

router.get("/get-videos", controller.getVideo);

//get data of any one videocard

router.post("/get-video-details", controller.videoDetails);

//update videos using postman

router.post("/update-channel-id", controller.updateChannel);

module.exports = router;
