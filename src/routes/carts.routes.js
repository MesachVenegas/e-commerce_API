const { createCart, updateCart, getCart } = require('../controllers/carts.controller');
const { Router } = require('express')

const router = Router();

router.get('/carts/:id', getCart);

router.post('/carts/create/:userId', createCart);

router.put('/carts/updated/:id', updateCart);

module.exports = router