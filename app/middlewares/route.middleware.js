/** app/middlewares/route.middleware */

class RouteMiddleware {

    ApiMiddleware = (req, res, next) => {
        // TODO: filter your api routes...
        next()
    }

    WebMiddleware = (req, res, next) => {
        // TODO: filter your web routes...
        // console.log(req.headers)
        next()
    }
    
}

module.exports = new RouteMiddleware()