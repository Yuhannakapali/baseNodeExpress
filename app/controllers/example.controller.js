/** app/controllers/example.controller */

class ExampleController {

    IndexPage = (req, res) => {
        res.render('pages/example/index', {title: 'Example Page'})
    }

}

module.exports = new ExampleController()