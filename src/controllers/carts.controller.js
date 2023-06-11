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
        const response = await CartServices.getUserCart(id);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}


const addProduct = async (req, res, next) => {
    try {
        const { cartId, productId, price, quantity } = req.body;
        await CartServices.addNewProduct({ cartId, productId, price, quantity });
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const getCartProducts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await CartServices.getProductsByCart(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCart,
    updateCart,
    getCart,
    addProduct,
    getCartProducts
};
