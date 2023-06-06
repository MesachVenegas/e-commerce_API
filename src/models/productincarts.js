'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInCarts extends Model {
    static associate(models) {
      // define association here
    }
  }
  ProductInCarts.init({
    productId: { type: DataTypes.INTEGER, field: "product_id" },
    cartId: { type: DataTypes.INTEGER, field: "cart_id" },
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductInCarts',
  });
  return ProductInCarts;
};