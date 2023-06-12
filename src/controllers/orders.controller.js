const OrderServices = require('../services/orders.service');

const createOrder = async (req, res, next) => {
    try {
        const { cartId } = req.params;
        const products = req.body;
        const response = await OrderServices.createOrder(cartId, products);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createOrder
};
