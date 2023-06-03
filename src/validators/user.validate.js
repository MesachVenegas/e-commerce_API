const fieldValidate = require('../utils/fieldValidator');
const { check } = require('express-validator');

/*
    imgUrl varchar [default: 'none']
}
*/
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
        .matches(/^[A-Za-z0-9 .,'!&]+$/),
    (req, res, next) =>{
        fieldValidate(req, res, next);
    }
]


module.exports = {
    validateCreation
};
