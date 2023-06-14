'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInOrders extends Model {
    static associate(models) {
      // Uno o mas ordenes perteneces a una o mas ordenes.
      ProductInOrders.belongsTo(models.Orders, {
        foreignKey: 'orderId'
      });
      // Una orden pertenece a uno o mas productos.
      ProductInOrders.belongsTo(models.Products, {
        foreignKey: 'productId'
      })
    }
  }
  ProductInOrders.init({
    orderId: { type: DataTypes.INTEGER, field: "order_id" },
    productId: { type: DataTypes.INTEGER, field: "product_id" },
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductInOrders',
  });
  return ProductInOrders;
};