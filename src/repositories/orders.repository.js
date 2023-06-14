const { Orders, ProductInOrders, Products, Users } = require('../models');
const { Op } = require('sequelize');


const initOrder = async (userId) => {
    const order = await Orders.create({ userId })
    return order;
}

const getUserOrders = async (userId) => {
    const orders = await Orders.findAll({
        where: { userId },
        attributes: {
            exclude: ['userId']
        },
        include: [
            {
                model: Users,
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            },
            {
                model: ProductInOrders,
                attributes: {
                    exclude: ['orderId', 'createdAt', 'updatedAt', 'productId']
                },
                include: {
                    model: Products,
                    include: {
                        model: Users,
                        attributes: {
                            exclude: ['password', 'createdAt', 'updatedAt']
                        }
                    }
                }
            }
        ]
    });
    return orders;
}


module.exports = {
    initOrder,
    getUserOrders
};
