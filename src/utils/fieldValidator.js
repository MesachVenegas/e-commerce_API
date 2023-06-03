const { validationResult } = require('express-validator');

const fieldValidate = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        next({
            status: 400,
            name: 'Validation Error',
            message: error.array().map( err => err.msg)
        });
    }
}

module.exports = fieldValidate;