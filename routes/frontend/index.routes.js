const express = require("express");
const router = express.Router();
const frontController = require("../../app/controllers/frontend/base.controller");
const userController = require("../../app/controllers/frontend/user.controller");

router.get("/", frontController.index);

router.get("/user/create", userController.index);
router.post("/user/create", userController.create);
router.get("/user/list", userController.view);

module.exports = router;
