const BaseRoute = require("./base.routes");
const ExampleRoute = require("./example.routes");
const frontEnd = require("./frontend/index.routes");
const backEnd = require("./backend/index.routes");

module.exports = (app) => {
  app.use("/", BaseRoute);
  app.use("/example", ExampleRoute);
  app.use("/frontend", frontEnd);
  app.use("/backEnd", backEnd);
};
