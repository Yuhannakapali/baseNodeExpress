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
  insertRecord = (req, res) => {};
  updateRecord = (req, res) => {};
}

module.exports = new userController();
