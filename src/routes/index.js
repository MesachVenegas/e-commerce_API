const userRoutes = require('./user.routes');

const apiRouter = (app) => {
    app.use(userRoutes);
}

module.exports = apiRouter;