const express = require("express");
const RouteMiddleware = require("../app/middlewares/route.middleware");
const BaseController = require("../app/controllers/base.controller");
const youtubeController = require("../app/controllers/youtubeController");
const router = express.Router();

router.use(RouteMiddleware.WebMiddleware); // adding route middleware

router.get("/", BaseController.IndexPage);
router.get("/youtube", youtubeController.index);

module.exports = router;
