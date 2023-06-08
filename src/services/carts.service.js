const { createUserCart, updateTotal, getCart } = require('../repositories/cart.repository');

class CartServices{
    static async getUserCart(){
        try {
            const response = await getCart();
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async createCart(data){
        try {
            const response = await createUserCart(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async updatePrice(data){
        try {
            const response = await updateTotal(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;