const ProductServices = require('../services/products.service');

const newItemData = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await ProductServices.addProduct(data);
        res.status(201).send(response);
    } catch (error) {
        next(error);
    }
}

const getProducts = async (req, res, next) => {
    try {
        const response = await ProductServices.getAllProducts();
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    newItemData,
    getProducts
};
