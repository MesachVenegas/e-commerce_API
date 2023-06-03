'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_by_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // products in cart tiene muchos productos
      products_by_cart.hasMany(models.products, { foreignKey: 'productId' });
      // products in cart pertenece a un carrito.
      products_by_cart.belongsTo(models.carts, {
        foreignKey: 'cartId',
        targetKey: 'id'
      })
    }
  }
  products_by_cart.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'products_by_cart',
    timestamps: false,
  });
  return products_by_cart;
};