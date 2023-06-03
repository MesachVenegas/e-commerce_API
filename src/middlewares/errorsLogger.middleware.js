
const errorLogger = (error, req, res, next) => {
    console.log(error);
    next(error);
}

module.exports = errorLogger;
