const { createUserCart, updateTotal, getCart, getOneProduct, addProduct, updateQuantity, getProductsInCart, createOrder } = require('../repositories/cart.repository');

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

    static async preOrder(cartId, userId) {
        try {
            // obtener el el listado de productos del carrito.
            const products = await getProductsInCart(cartId);
            // crear una nueva orden.
            const newOrder = await createOrder(userId);
            // agregar los productos al ProductsInOrder.
            // marcar los productos en ProductsInCarts como comprados o en orden.
            return products;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;