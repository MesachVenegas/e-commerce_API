const productsRoutes = require('./products.routes');
const ordersRoutes = require('./orders.routes');
const SwaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const cartRoutes = require('./carts.routes');
const userRoutes = require('./user.routes');

const apiRouter = (app) => {
    app.use(userRoutes);
    app.use(productsRoutes);
    app.use(cartRoutes);
    app.use(ordersRoutes);

    // ? Documentation
    app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDoc));
}

module.exports = apiRouter;