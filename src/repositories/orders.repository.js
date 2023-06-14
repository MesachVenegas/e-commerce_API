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

const getProductsInOrder = async (orderId) => {
    return await ProductInOrders.findAll({ where: { orderId } })
}

const findOrderById = async (orderId) => {
    const order = await Orders.findByPk(orderId);
    return order;
}

const completeProduct = async (orderId, productId) => {
    const product = await ProductInOrders.findOne({
        where: {
            [Op.and]: [
                { orderId },
                { productId }
            ]
        }
    });

    const bought = await product.update({
        status: true
    })
    return bought;
}

const completeOrder = async (orderId) => {
    const order = await findOrderById(orderId);
    const complete = await order.update({
        isCompleted: true
    });
    return complete;
}

module.exports = {
    initOrder,
    getUserOrders,
    completeProduct,
    findOrderById,
    completeOrder,
    getProductsInOrder
};
