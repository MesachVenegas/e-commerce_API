const { Op } = require('sequelize');
const { Carts, Users, Products, ProductInCarts } = require('../models');

const getCart = async (id) => {
    return await Carts.findAll({
        where: { id: id },
        attributes: { exclude: ['userId'] },
        include: [
            {
                model: Users,
                attributes: { exclude: ['password'] }
            },
            {
                model: Products,
                attributes: { exclude: ['userId']},
                include: {
                    model: Users
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

const getProducts = async (id) => {
    return await ProductInCarts.findAll({
        where: {
            [Op.and]: [
                { cartId: id },
                { status: false },
            ],
        },
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
    await product.increment('quantity', { by: 1 });
return product;
}

module.exports = {
    getCart,
    getProducts,
    createUserCart,
    updateTotal,
    updateQuantity,
    addProduct,
    getProductsInCart
};
