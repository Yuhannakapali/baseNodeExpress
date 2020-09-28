/** app/middlewares/app.middleware */

class AppMiddleware {

    AppMiddleware = (req, res, next) => {
        // TODO: do something creative in app level middleware...
        next()
    }
    
}

module.exports = new AppMiddleware()