const fieldValidate = require('../utils/fieldValidator');
const { check } = require('express-validator');
//  /^[a-zA-Z0-9]+$/
const validateNewProduct = [
    check('name', 'error validating name field')
        .exists().withMessage('name field is required')
        .trim().notEmpty().withMessage('name field cannot be empty')
        .isString().withMessage('name field must be a string')
        .isLength({ min: '10'}).withMessage('name field must be at least 10 characters')
        .matches(/^[a-zA-Z0-9]+$/).withMessage('name field only contains letters and numbers'),
    check('description', 'error validating description field')
        .exists().withMessage('description field is required')
        .trim().notEmpty().withMessage('description field cannot be empty')
        .isString().withMessage('description field description must be a string')
        .isLength({ min: '100'}).withMessage('description field must be at least 100 characters')
        .matches(/^[a-zA-Z0-9!.,_-]+$/).withMessage('description fiel only must contains letters, numbers, punctuation symbols, and underscore or middle dash'),
    check('price', 'error validating price field')
        .exists().withMessage('price field is required')
        .trim().notEmpty().withMessage('price field cannot be empty')
        .isNumeric().withMessage('price field must be a number')
        .matches(/^[0-9]+$/).withMessage('price field only contains numbers'),
    check('stock', 'error validating stock field')
        .trim().notEmpty().withMessage('stock field cannot be empty')
        .isNumeric().withMessage('stock field must be a number')
        .matches(/^[0-9]+$/).withMessage('stock field only contains numbers'),
    check('available', 'error validating available field')
        .isBoolean().withMessage('available field must be true or false'),
    (req, res, next) => {
        fieldValidate(req, res, next);
    }
]

const updateProduct = [
    check('name', 'error validating name field')
        .trim().notEmpty().withMessage('name field cannot be empty')
        .isString().withMessage('name field must be a string')
        .isLength({ min: '10'}).withMessage('name field must be at least 10 characters')
        .matches(/^[a-zA-Z0-9]+$/).withMessage('name field only contains letters and numbers'),
    check('description', 'error validating description field')
        .trim().notEmpty().withMessage('description field cannot be empty')
        .isString().withMessage('description field description must be a string')
        .isLength({ min: '100'}).withMessage('description field must be at least 100 characters')
        .matches(/^[a-zA-Z0-9!.,_-]+$/).withMessage('description fiel only must contains letters, numbers, punctuation symbols, and underscore or middle dash'),
    check('price', 'error validating price field')
        .trim().notEmpty().withMessage('price field cannot be empty')
        .isNumeric().withMessage('price field must be a number')
        .matches(/^[0-9]+$/).withMessage('price field only contains numbers'),
    check('stock', 'error validating stock field')
        .trim().notEmpty().withMessage('stock field cannot be empty')
        .isNumeric().withMessage('stock field must be a number')
        .matches(/^[0-9]+$/).withMessage('stock field only contains numbers'),
    check('available', 'error validating available field')
        .isBoolean().withMessage('available field must be true or false'),
    (req, res, next) => {
        fieldValidate(req, res, next);
    }
]


module.exports = {
    validateNewProduct,
    updateProduct,
};
