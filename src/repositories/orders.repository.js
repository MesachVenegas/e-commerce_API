const { Orders, ProductInCarts, ProductInOrders } = require('../models');
const { Op } = require('sequelize');


const initOrder = async (userId) => {
    const result = Orders.create(userId);
}

const orderedProducts = async (cartId) => {
    console.log(productId);
    const result = await ProductInCarts.update({ ordered: true }, {
        where: { cartId }
    })
    return result;
}

module.exports = {
    initOrder,
    orderedProducts,
};
