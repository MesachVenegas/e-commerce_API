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
            attributes: { exclude: ['password'] }
        }
    });
    return products;
}

const insertImagesUrl = async (id, images) => {
    const loaded = await Products.update({
        img: images
    }, {
        where: { id }
    });
    return loaded;
}

const editItem = async (id, item) => {
    const newData = await Products.update(item, {
        where: { id },
    })
    return newData;
}

module.exports = {
    addNewProduct,
    insertImagesUrl,
    editItem,
    getAllProductsInStock
};
