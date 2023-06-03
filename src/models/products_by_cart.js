'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products_by_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // products in cart tiene muchos productos
      Products_by_cart.hasMany(models.Products, { foreignKey: 'productId' });
      // products in cart pertenece a un carrito.
      Products_by_cart.belongsTo(models.Carts, {
        foreignKey: 'id',
        targetKey: 'cartId'
      })
    }
  }
  Products_by_cart.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Products_by_cart',
  });
  return Products_by_cart;
};