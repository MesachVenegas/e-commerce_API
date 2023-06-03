const { createUser } = require('../controllers/user.controller');
const { Router } = require('express')

const router = Router();

router.post('/users', createUser);

module.exports = router