const express = require("express");
const router = new express.Router();
const controller = require("../controller/commentController");
const authorise = require("../middleware/verifyToken");

router.post("/add-comment", authorise, controller.addComment);

router.post("/get-all-comment", controller.getAllComments);
module.exports = router;
