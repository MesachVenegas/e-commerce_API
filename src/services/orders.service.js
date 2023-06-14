const { initOrder, getUserOrders } = require('../repositories/orders.repository');

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
}

module.exports = OrderServices;