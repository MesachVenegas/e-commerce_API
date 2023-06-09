const { createUserCart, updateTotal, getCart } = require('../repositories/cart.repository');

class CartServices{
    static async getUserCart(id){
        try {
            const response = await getCart(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async createCart(userId){
        try {
            console.log(userId);
            const response = await createUserCart(userId);
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