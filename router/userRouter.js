const express = require("express");
const router = new express.Router();
const controller = require("../controller/userController");

router.post("/create-user", controller.createUser);
router.post("/login", controller.loginUser);
module.exports = router;
