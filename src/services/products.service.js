const { addNewProduct, getAllProductsInStock, insertImagesUrl } = require('../repositories/products.repository');

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

    static async loadImages(id, images) {
        try {
            if (images.length <= 0) {
                throw new Error('we couldn\'t find images')
            }
            const urls = images.map(image => image.path)
            console.log(urls)
            const response = await insertImagesUrl(id, urls);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;