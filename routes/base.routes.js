const express = require("express");
const RouteMiddleware = require("../app/middlewares/route.middleware");
const BaseController = require("../app/controllers/base.controller");
const router = express.Router();

router.use(RouteMiddleware.WebMiddleware); // adding route middleware

router.get("/", BaseController.IndexPage);
router.get("");

module.exports = router;
