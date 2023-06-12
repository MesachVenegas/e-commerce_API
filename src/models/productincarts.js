'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInCarts extends Model {
    static associate(models) {
      // Muchos productos perteneces a muchos carritos.
      ProductInCarts.belongsTo(models.Products, {
        foreignKey: 'productId'
      });
      // Muchos productos del carrito pertenecen a muchos carritos.
      ProductInCarts.belongsTo(models.Carts, {
        foreignKey: 'cartId'
      });
    }
  }
  ProductInCarts.init({
    productId: { type: DataTypes.INTEGER, field: "product_id" },
    cartId: { type: DataTypes.INTEGER, field: "cart_id" },
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    ordered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductInCarts',
  });
  return ProductInCarts;
};