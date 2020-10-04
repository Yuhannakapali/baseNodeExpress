class login {
  index = (req, res) => {
    res.render("pages/login/index");
  };
}

module.exports = new login();
