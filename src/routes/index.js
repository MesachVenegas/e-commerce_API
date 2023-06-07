const productsRoutes = require('./products.routes');
const SwaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json')
const userRoutes = require('./user.routes');

const apiRouter = (app) => {
    app.use(userRoutes);
    app.use(productsRoutes);
    // ? Documentation
    app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDoc));
}

module.exports = apiRouter;