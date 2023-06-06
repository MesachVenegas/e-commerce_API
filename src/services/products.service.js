const { addNewProduct, getAllProductsInStock } = require('../repositories/products.repository');

class ProductServices {
    static async addProduct(data) {
        try {
            const response = await addNewProduct(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async getAllProducts() {
        try {
            const response = await getAllProductsInStock();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;