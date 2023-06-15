const fieldValidate = require('../utils/fieldValidator');
const { check } = require('express-validator');

const validateCreation = [
    check('username', 'error on user field validation')
        .exists().withMessage('The username field did not exist')
        .trim().notEmpty().withMessage('The username field cannot be empty')
        .isString().withMessage('The username field must be a string')
        .isLength({ min: '3' }).withMessage('The username field must be at least 3 characters'),
    check('email', 'error on email field validation')
        .exists().withMessage('The email field does not exist')
        .trim().notEmpty().withMessage('The email field cannot be empty')
        .isString().withMessage('The email field must be a string')
        .isEmail().withMessage('Invalid email format'),
    check('password', 'error on password field validation')
        .exists().withMessage('The password field did not exist')
        .trim().notEmpty().withMessage('The password field cannot be empty')
        .isString().withMessage('The password field must be a string')
        .isLength({ min: '6', max: '16' }).withMessage('The password field must be between 6 and 16 characters')
        .matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage('The password field must be numbers,letters or one of this characters !&'),
    (req, res, next) =>{
        fieldValidate(req, res, next);
    }
]

const validateNewUsername = [
    check('username', 'error on user field validation')
        .exists().withMessage('The username field did not exist')
        .trim().notEmpty().withMessage('The username field cannot be empty')
        .isString().withMessage('The username field must be a string')
        .isLength({ min: '6' }).withMessage('The username field must be at least 6 characters'),
    (req, res, next) => {
        fieldValidate(req, res, next);
    }
]

const loginValidate = [
    check('email', 'error on email field validation')
        .exists().withMessage('The username field is required')
        .trim().notEmpty().withMessage('The username field cannot be empty'),
    check('password', 'error on password field validation')
        .exists().withMessage('The password field is required')
        .trim().notEmpty().withMessage('The password field cannot be empty')
        .isString().withMessage('The password field must be a string')
        .isLength({ min: '6', max: '16' }).withMessage('The password field must be between 6 and 16 characters'),
    (req, res, next) => {
        fieldValidate(req, res, next);
    }
]


module.exports = {
    validateCreation,
    loginValidate,
    validateNewUsername,
};
