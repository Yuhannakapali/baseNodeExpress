const express = require("express");
const RouteMiddleware = require("../app/middlewares/route.middleware");
const ExampleController = require("../app/controllers/example.controller");
const router = express.Router();

router.use(RouteMiddleware.WebMiddleware); // adding route middleware

router.get("/", ExampleController.IndexPage);

module.exports = router;
