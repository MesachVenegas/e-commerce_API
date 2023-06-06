'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInOrders extends Model {
    static associate(models) {
      // define association here
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