const express = require("express");
const router = new express.Router();
const controller = require("../controller/commentController");

router.post("add-comment", controller.addComment);

router.post("get-all-comment", controller.getAllComments);
module.exports = router;
