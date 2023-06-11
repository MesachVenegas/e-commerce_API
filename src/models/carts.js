'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Carts extends Model {
        static associate(models) {
            // Un carrito le pertenece a un usuarios.
            Carts.belongsTo(models.Users, { foreignKey: "userId", targetKey: "id" })
            // Un carrito tiene muchos productos
            Carts.belongsToMany(models.Products, { through: "ProductInCarts", foreignKey: "cartId" })
        }
    }
    Carts.init({
        userId: { type: DataTypes.INTEGER, field: "user_id" },
        totalPrice: { type: DataTypes.REAL, field: "total_price" },
    }, {
        sequelize,
        modelName: 'Carts',
        timestamps: false,
    });
    return Carts;
};