const { createUserCart, updateTotal, getCart, getProduct, addProduct, updateQuantity, getProducts } = require('../repositories/cart.repository');

class CartServices {
    static async getUserCart(id) {
        try {
            const response = await getCart(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async getProductsByCart(id) {
        try {
            const products = await getProducts(id);
            return products;
        } catch (error) {
            throw error;
        }
    }

    static async createCart(userId) {
        try {
            console.log(userId);
            const response = await createUserCart(userId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async updatePrice(data) {
        try {
            const response = await updateTotal(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async addNewProduct(data) {
        try {
            const product = await getProduct(data.productId);
            if(!product){
                return await addProduct(data);
            }
            return await updateQuantity(data.productId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;