const { initOrder, getUserOrders, completeProduct, findOrderById, completeOrder, getProductsInOrder } = require('../repositories/orders.repository');
const { findUser } = require('../repositories/user.repository');
const sendBoughtEmail = require('../utils/orderEmail');

class OrderServices {
    static async createOrder(userId) {
        try {
            const order = await initOrder(userId);
            return order;
        } catch (error) {
            throw error;
        }
    }

    static async getOrdersByUser(userId) {
        try {
            const orders = await getUserOrders(userId);
            return orders;
        } catch (error) {
            throw error;
        }
    }


    static async completeOrder(orderId) {
        try {
            // Obtener los productos de la orden
            const products = await getProductsInOrder(orderId);
            // marcar los productos como comprados
            for(const product of products) {
                await completeProduct(orderId, product.productId);
            }
            // marcar la orden como completada
            await completeOrder(orderId);
            // enviar correo de confirmacion de orden de compra.
            const order = await findOrderById(orderId);
            const user = await findUser(order.userId);
            sendBoughtEmail(user.email, {
                username: user.username,
                order: order
            })
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderServices;