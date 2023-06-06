const userRoutes = require('./user.routes');
const productsRoutes = require('./products.routes');

const apiRouter = (app) => {
    app.use(userRoutes);
    app.use(productsRoutes);
}

module.exports = apiRouter;