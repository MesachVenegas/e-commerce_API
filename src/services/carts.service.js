const { createUserCart, updateTotal, getCart, getOneProduct, addProduct, updateQuantity, prepareOrder } = require('../repositories/cart.repository');

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
            const product = await getOneProduct(data.cartId, data.productId);
            console.log(product.length);
            if(product.length === 0){
                return await addProduct(data);
            }
            const added = await updateQuantity(data.cartId, data.productId);
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