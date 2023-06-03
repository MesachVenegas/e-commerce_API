'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products_by_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // products in order tiene muchos productos.
      Products_by_order.hasMany(models.Products, { foreignKey: 'productsId' });
      // products in order pertenece a una orden.
      Products_by_order.belongsTo(models.Orders, {
        foreignKey: 'id',
        targetKey: 'orderId',
      })
    }
  }
  Products_by_order.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Products_by_order',
  });
  return Products_by_order;
};