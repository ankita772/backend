const express = require("express");
const router = new express.Router();
const controller = require("../controller/commentController");
const authorise = require("../middleware/verifyToken");

router.post("/add-comment", authorise, controller.addComment);

router.post("/get-all-comments", authorise, controller.getAllComments);
module.exports = router;
