const errorLogger = require('../middlewares/errorsLogger.middleware');
const errorHandler = require('../middlewares/errorsHandler.middleware');
const ormErrorHandler = require('../middlewares/ormErrorHandler.middleware');

const errorRoutes = (app) => {
    app.use(errorLogger);
    app.use(errorHandler);
    app.use(ormErrorHandler);

    app.use('*', (req, res) => {
        res.status(404).json({
            message: "Sorry we couldn't find them"
        });
    })
}

module.exports = errorRoutes;
