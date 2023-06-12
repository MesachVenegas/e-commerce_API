const { Op } = require('sequelize');
const { Carts, Users, Products, ProductInCarts } = require('../models');

const getCart = async (id) => {
    return await Carts.findAll({
        where: { id: id },
        attributes: { exclude: ['userId'] },
        include: [
            {
                model: Users,
                attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
            },
            {
                model: Products,
                attributes: { exclude: ['userId']},
                include: {
                    model: Users,
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt']
                    }
                },
                through: {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt','productId', 'cartId']
                    }
                }
            }
        ]
    });
}

const addProduct = async (product) => {
    return await ProductInCarts.create(product);
}

const createUserCart = async (data) => {
    return await Carts.create(data);
}

const getProduct = async (id) => {
    return await ProductInCarts.findAll({
        where: {
            [Op.and]: [
                { cartId: id },
                { ordered: false },
            ],
        }
    });
}

const updateTotal = async (id, data) => {
    return await Carts.update(data, { where: { id } });
}

const getProductsInCart = async (cartId) => {
    return await ProductInCarts.findAll({ where: { cartId } });
}

const updateQuantity = async (productId) => {
    const product = await ProductInCarts.findByPk(productId);
    await product.increment('quantity', { by: 1 })
    return;
}

const prepareOrder = async (cartId) => {
    const products = await ProductInCarts.findAll({
        where: { cartId }
    })

    return products;
}

module.exports = {
    getCart,
    getProduct,
    createUserCart,
    updateTotal,
    updateQuantity,
    addProduct,
    getProductsInCart,
    prepareOrder
};
