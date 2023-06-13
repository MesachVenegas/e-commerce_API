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


module.exports = {
    createOrder
};
