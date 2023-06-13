const { createCart, updateCart, getCart, addProduct, prepareOrder } = require('../controllers/carts.controller');
const tokenAuth = require('../middlewares/auth.middleware');
const { Router } = require('express')

const router = Router();

router.get('/carts/:id', tokenAuth, getCart);

router.post('/carts/create/:userId', tokenAuth, createCart);

router.post('/carts/:cartId/users/:userId/', tokenAuth, prepareOrder);

router.put('/carts/:cartId/add', tokenAuth, addProduct);

router.put('/carts/updated/:id', tokenAuth, updateCart);

module.exports = router
