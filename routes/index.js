const BaseRoute = require("./base.routes");
const ExampleRoute = require("./example.routes");
const frontEndRoute = require("./frontend/index.routes");
const backEndRoute = require("./backend/index.routes");

module.exports = (app) => {
  app.use("/", BaseRoute);
  app.use("/example", ExampleRoute);
  app.use("/frontend", frontEndRoute);
  app.use("/backend", backEndRoute);
};
