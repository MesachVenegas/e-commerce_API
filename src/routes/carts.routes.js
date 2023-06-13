const { createCart, updateCart, getCart, addProduct, prepareOrder } = require('../controllers/carts.controller');
const { Router } = require('express')

const router = Router();

router.get('/carts/:id', getCart);

router.post('/carts/create/:userId', createCart);

router.post('/carts/:cartId/users/:userId/', prepareOrder);

router.put('/carts/:cartId/add', addProduct);

router.put('/carts/updated/:id', updateCart);

module.exports = router
