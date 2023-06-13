const { initOrder } = require('../repositories/orders.repository');

class OrderServices {
    static async createOrder(userId) {
        try {
            const order = await initOrder(userId);
            return order;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OrderServices;