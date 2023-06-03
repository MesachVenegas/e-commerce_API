'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_by_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // products in order tiene muchos productos.
      products_by_order.hasMany(models.products, { foreignKey: 'productsId' });
      // products in order pertenece a una orden.
      products_by_order.belongsTo(models.orders, {
        foreignKey: 'orderId',
        targetKey: 'id',
      })
    }
  }
  products_by_order.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.REAL,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'products_by_order',
    timestamps: false,
  });
  return products_by_order;
};