const Channel = require("../model/channel");
const express = require("express");
const router = new express.Router();
const controller = require("../controller/channelController");

router.post("/create-channel", controller.createChannel);

router.get("/get-channels", controller.getChannel);
module.exports = router;
