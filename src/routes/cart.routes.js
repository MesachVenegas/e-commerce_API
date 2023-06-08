const { createCart, updateCart, getCart } = require('../controllers/carts.controller');
const { Router } = require('express')

const router = Router();

router.post('/carts/create', createCart);

router.put('/carts/update/:id', updateCart);

router.get('/carts/:id', getCart);

module.exports = router