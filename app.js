const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
require("./config/database");

const AppMiddleware = require("./app/middlewares/app.middleware");

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public/assets"));
app.use(AppMiddleware.AppMiddleware);
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layouts/app",
    layoutsDir: __dirname + "/public/views/",
    partialsDir: __dirname + "/public/views/layouts/partials",
  })
);
app.set("views", "public/views");
app.set("view engine", "hbs");

require("./routes")(app);

app.listen(3000, (_) => {
  console.log("The server is running on Port 3000");
});
