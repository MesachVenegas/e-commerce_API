'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate(models) {
      // Una orden le pertenece a un usuario.
      Orders.belongsTo(models.Users, {
        foreignKey: "userId",
        targetKey: "id",
      });
      // Una orden tiene muchos productos.
      Orders.belongsToMany(models.Products, {
        through: "ProductInCarts",
        foreignKey: "orderId"
      });
      //  Una orden tiene muchos productos en la orden.
      Orders.hasMany(models.ProductInOrders, {
        foreignKey: "orderId"
      });
    }
  }
  Orders.init({
    totalPrice: { type: DataTypes.REAL, field: "total_price" },
    userId: { type: DataTypes.INTEGER, field: "user_id" },
    isCompleted: { type: DataTypes.BOOLEAN, field: "is_completed" },
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};