const express = require("express");
const router = new express.Router();
const controller = require("../controller/videoController");
const authorise = require("../middleware/verifyToken");

//add video
router.post("/add-videos", controller.addVideo);

//get videos

router.get("/get-all-videos", controller.getAllVideos);

//get data of any one videocard

router.post("/get-video-details", controller.videoDetails);

//update like

router.post("/update-like", authorise, controller.updateLike);

//update dislike

router.post("/update-dislike", authorise, controller.updateDislike);

//update subscriber

router.post("/update-subscriber", authorise, controller.updateSubscriber);

module.exports = router;
