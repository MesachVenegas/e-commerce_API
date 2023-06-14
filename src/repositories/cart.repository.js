const { Op } = require('sequelize');
const { Carts, Users, Products, ProductInCarts, ProductInOrders } = require('../models');

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
                attributes: { exclude: ['userId'] },
                include: {
                    model: Users,
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt']
                    }
                },
                through: {
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'productId', 'cartId']
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

const getOneProduct = async (cart, product) => {
    return await ProductInCarts.findAll({
        where: {
            [Op.and]: [
                { cartId: cart },
                { productId: product },
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

const updateQuantity = async (cart, product) => {
    const productInCart = await ProductInCarts.findOne({
        where: {
            [Op.and]: [
                { cartId: cart },
                { productId: product },
            ],
        }
    });
    const quantityAdded = await productInCart.increment('quantity', { by: 1 })
    return quantityAdded;
}

const getCartProducts = async (cartId) => {
    const products = await ProductInCarts.findAll({
        where: {
            [Op.and]: [
                { cartId: cartId },
                { ordered: false },
            ]
        },
        attributes: {
            exclude: ['productId', 'cartId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Products,
                include: {
                    model: Users,
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt']
                    }
                }
            }
        ]
    })

    return products;
}

const addProductToOrder = async (product) => {
    const orderProduct = await ProductInOrders.create(product);
    return orderProduct;
}

const checkProduct = async (cartId, productId) => {
    const products = await ProductInCarts.findOne({
        where: {
            [Op.and]: [
                { cartId },
                { productId },
            ]
        }
    })
    const checked =  await products.update({ ordered: true });
    return checked;
}

module.exports = {
    getCart,
    createUserCart,
    updateTotal,
    updateQuantity,
    addProduct,
    getProductsInCart,
    getCartProducts,
    getOneProduct,
    addProductToOrder,
    checkProduct
};
