/** app/controllers/base.controller */

class BaseController {
  IndexPage = (req, res) => {
    res.render("pages/base/index");
  };
}

module.exports = new BaseController();
