const { createOrder } = require('../controllers/orders.controller');
const { Router } = require('express')

const router = Router();

router.post('/orders/create', createOrder);

module.exports = router
