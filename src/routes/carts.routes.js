const { createCart, updateCart, getCart, addProduct } = require('../controllers/carts.controller');
const { Router } = require('express')

const router = Router();

router.get('/carts/:id', getCart);

router.post('/carts/create/:userId', createCart);

router.put('/carts/updated/:id', updateCart);

router.post('/carts/:id/products', addProduct);

module.exports = router