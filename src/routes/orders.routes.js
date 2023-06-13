const { createOrder } = require('../controllers/orders.controller');
const tokenAuth = require('../middlewares/auth.middleware');
const { Router } = require('express')

const router = Router();

router.post('/orders/create/:userId', tokenAuth, createOrder);

module.exports = router
