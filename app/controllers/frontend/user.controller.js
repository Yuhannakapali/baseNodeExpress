const mongoose = require("mongoose");
const user = mongoose.model("user");
class userController {
  index = (req, res) => {
    res.render("pages/crud/create", { title: "create User" });
  };
  create = (req, res) => {
    if (req.body._id == "") {
      insertRecord(req, res);
    } else {
      updateRecord(req, res);
    }
  };
  view = (req, res) => {
    user.find((err, doc) => {
      if (!err) {
        res.render("pages/crud/view", { user: doc });
      } else {
        console.log("error retriving the userLIst" + err);
      }
    });
  };
}

insertRecord = (req, res) => {
  const user = new user();
  user.name = req.body.name;
  user.email = req.body.email;
  user.mobile = req.body.mobile;
  user.role = req.body.role;
  user.save((err, doc) => {
    if (!err) {
      res.redirect("user/list");
    } else {
      if (err.name == "ValidationError") {
        handleValidationError(err, req.body);
        res.render("user/addOrEdit", { title: "Inset user", user: req.body });
      } else {
        console.log("error durig record insertation" + err);
      }
    }
  });
};
updateRecord = (req, res) => {
  user.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("user/list");
      } else {
        if (err.name == "ValidationError") {
          handleValidationError(err, req.body);
          res.render("user/addOrEdit", {
            title: "update Employe",
            user: req.body,
          });
        } else {
          console.log("Error during record update:" + err);
        }
      }
    }
  );
};

function handleValidationError(err, body) {
  console.log("handleValidationError -> err", err);
  // for(fieldinerr.errors){
  switch (err.error[filed].path) {
    case "name":
      body["fullNameEroor"] = err.errors[field].message;
      break;

    default:
      break;
  }
  // }
}
module.exports = new userController();
