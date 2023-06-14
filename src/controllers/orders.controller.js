const OrderServices = require('../services/orders.service');

const createOrder = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const response = await OrderServices.createOrder(userId);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getAllUserOrders = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const orders = await OrderServices.getOrdersByUser(userId);
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
}

const finishOrder = async (req, res, next) => {
    try {
        const { orderId } = req.params;
        await OrderServices.completeOrder(orderId);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createOrder,
    getAllUserOrders,
    finishOrder,
};
