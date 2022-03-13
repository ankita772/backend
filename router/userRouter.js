const express = require("express");
const router = new express.Router();
const controller = require("../controller/userController");

router.post("/add-user", controller.addUser);
router.post("/login", controller.loginUser);
module.exports = router;
