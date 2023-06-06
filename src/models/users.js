'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
            // Un usuario tiene muchos productos
            Users.hasMany(models.Products, { foreignKey: 'userId' });
            // Un usuario tiene un carrito
            Users.hasOne(models.Carts, { foreignKey: 'userId' });
            // Un usuario puede crear muchas ordenes.
            Users.hasMany(models.Orders, { foreignKey: 'userId' });
        }
    }
    Users.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};