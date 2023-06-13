const { createOrder } = require('../controllers/orders.controller');
const { Router } = require('express')

const router = Router();

router.post('/orders/create/:userId', createOrder);

module.exports = router
