'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un carrito pertenece a un usuario.
      Carts.belongsTo(models.users, {
        foreignKey: 'id',
        targetKey: 'usersId'
      })
    }
  }
  Carts.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};