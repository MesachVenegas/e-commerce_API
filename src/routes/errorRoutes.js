const errorLogger = require('../middlewares/errorsLogger.middleware');
const errorHandler = require('../middlewares/errorsHandler.middleware');
const ormErrorHandler = require('../middlewares/ormErrorHandler.middleware');

const errorRoutes = (app) => {
    app.use(errorLogger);
    app.use(errorHandler);
    app.use(ormErrorHandler);
}

module.exports = errorRoutes;