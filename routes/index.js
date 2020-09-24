const BaseRoute = require('./base.routes')
const ExampleRoute = require('./example.routes')

module.exports = (app) => {
    app.use('/', BaseRoute)
    app.use('/example', ExampleRoute)
}