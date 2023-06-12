const { createUserCart, updateTotal, getCart, getProduct, addProduct, updateQuantity, getProducts, prepareOrder } = require('../repositories/cart.repository');

class CartServices {
    static async getUserCart(id) {
        try {
            const response = await getCart(id);
            return response;
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
            const added = await updateQuantity(data.productId);
            return added;
        } catch (error) {
            throw error;
        }
    }

    static async preOrder(cartId) {
        try {
            const response = await prepareOrder(cartId);
            return response
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;