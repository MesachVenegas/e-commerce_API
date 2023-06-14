const { addNewProduct, getAllProductsInStock, insertImagesUrl, editItem } = require('../repositories/products.repository');

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

    static async editProduct(id, fields) {
        try {
            const data = {};
            for(let field in fields) {
                if(fields[field].toString().length > 0){
                    data[field] = fields[field]
                }
            }
            const response = await editItem(id, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductServices;