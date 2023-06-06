const { Products, Users } = require('../models');
const { Op } = require('sequelize');


const addNewProduct = async (newProduct) => {
    const product = await Products.create(newProduct);
    return product;
}

const getAllProductsInStock = async () => {
    const products = await Products.findAll({
        where: {
            available: { [Op.not]: false }
        },
        attributes: {
            exclude: ['userId']
        },
        include: {
            model: Users,
            attributes: { exclude: ['password']}
        }
    });
    return products;
}

module.exports = {
    addNewProduct,
    getAllProductsInStock
};
