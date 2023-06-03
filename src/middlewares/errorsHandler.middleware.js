
const errorHandler = (error, req, res, next) => {
    const { status } = error;

    return res.status(status || 500).json({
        name: error.name,
        message: error.message
    });
}

module.exports =  errorHandler;