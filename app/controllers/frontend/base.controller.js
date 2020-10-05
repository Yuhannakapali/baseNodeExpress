class baseController {
  index = (req, res) => {
    res.send("test");
  };
}

module.exports = new baseController();
