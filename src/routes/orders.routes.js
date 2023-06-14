const { createOrder, getAllUserOrders } = require('../controllers/orders.controller');
const tokenAuth = require('../middlewares/auth.middleware');
const { Router } = require('express')

const router = Router();

router.post('/orders/create/:userId', tokenAuth, createOrder);

router.get('/orders/users/:userId', getAllUserOrders);

module.exports = router
