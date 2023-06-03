'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Una orden le pertenece a un usuario.
      Orders.belongsTo(models.users, {
        foreignKey: 'id',
        targetKey: 'userId'
      })
    }
  }
  Orders.init({
    totalPrice: DataTypes.REAL,
    userId: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};