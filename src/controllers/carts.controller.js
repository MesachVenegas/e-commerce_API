const CartServices = require('../services/carts.service.js');

const createCart = async (req, res, next) => {
    try {
        const { userId } = req.body;
        await CartServices.createCart(userId);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
};

const updateCart = async (req, res, next) => {
    try {
        const { totalPrice } = req.body;
        await CartServices.updatePrice(totalPrice);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const getCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        res.status(200).json(cartId);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCart,
    updateCart,
    getCart
};
