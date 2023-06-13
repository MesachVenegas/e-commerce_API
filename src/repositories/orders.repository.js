const { Orders, ProductInCarts, ProductInOrders } = require('../models');
const { Op } = require('sequelize');


const initOrder = async (userId) => {
    const order = await Orders.create({ userId })
    return order;
}


module.exports = {
    initOrder,
};
