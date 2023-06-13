const { createUser, getUser, userDelete, logIn, updateAvatar, updateUserName } = require('../controllers/user.controller');
const { validateCreation, validateNewUsername } = require('../validators/user.validate');
const tokenAuth = require('../middlewares/auth.middleware');
const { uploadAvatar } = require('../utils/imgLoader');
const { Router } = require('express')
const router = Router();

router.post('/users/:id/avatar', tokenAuth, uploadAvatar, updateAvatar);

router.post('/users', validateCreation, createUser);

router.post('/users/login', logIn);

router.get('/users/:id', getUser);

router.delete('/users/:id', tokenAuth, userDelete);

router.put('/users/:id/profile', tokenAuth, validateNewUsername, updateUserName);

module.exports = router
