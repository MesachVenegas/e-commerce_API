const { createUser, getUser, userDelete, logIn, updateAvatar, updateUserName } = require('../controllers/user.controller');
const { validateCreation } = require('../validators/user.validate');
const upload = require('../utils/imgLoader');
const { Router } = require('express')
const router = Router();

router.post('/users/:id/avatar', upload, updateAvatar);

router.post('/users', validateCreation, createUser);

router.post('/users/login', logIn);

router.get('/users/:id', getUser);

router.delete('/users/:id', userDelete);

router.put('/users/:id/profile', updateUserName);

module.exports = router
