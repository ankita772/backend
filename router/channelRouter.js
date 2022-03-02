const express = require("express");
const router = new express.Router();
const controller = require("../controller/channelController");

router.post("/create-channel", controller.createChannel);

router.post("/get-unique-channel", controller.getUniqueChannel);
module.exports = router;
