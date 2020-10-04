const express = require("express");
const router = express.Router();
const frontController = require("../../app/controllers/frontend/base.controller");

router.get("/", frontController.index);

module.exports = router;
