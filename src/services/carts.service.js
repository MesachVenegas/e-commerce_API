const { initOrder } = require('../repositories/orders.repository');
const {
    createUserCart, updateTotal, getOneProduct, addProduct, updateQuantity, getProductsInCart, addProductToOrder, checkProduct, getCartProducts
} = require('../repositories/cart.repository');

class CartServices {
    static async getUserCart(id) {
        try {
            const response = await getCartProducts(id);
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
            if (product.length === 0) {
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
            const newOrder = await initOrder(userId);
            for (const product of products) {
                // agregar los productos al ProductsInOrder.
                await addProductToOrder({
                    orderId: newOrder.id,
                    productId: product.productId,
                    quantity: product.quantity,
                    price: product.price,
                });
                // marcar los productos en ProductsInCarts como comprados o en orden.
                await checkProduct(cartId, product.productId);
            }
            // return newOrder;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;