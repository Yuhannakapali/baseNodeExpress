const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/Users",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connection sucessfull");
    } else {
      console.log("Db Connection error" + err);
    }
  }
);

require("../app/model/user");
