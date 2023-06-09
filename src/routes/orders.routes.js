const { createOrder, getAllUserOrders, finishOrder } = require('../controllers/orders.controller');
const tokenAuth = require('../middlewares/auth.middleware');
const { Router } = require('express')

const router = Router();

router.post('/orders/create/:userId', tokenAuth, createOrder);

router.get('/orders/users/:userId', tokenAuth, getAllUserOrders);

router.put('/orders/complete/:orderId', tokenAuth, finishOrder)

module.exports = router
