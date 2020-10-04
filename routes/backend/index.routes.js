const express = require("express");
const router = express.Router();
const loginController = require("../../app/controllers/backend/login.controller");

router.get("/login", loginController.index);
module.exports = router;
