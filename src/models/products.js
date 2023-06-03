'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Un producto pertenece a un usuario
            products.belongsTo(models.users, {
                foreignKey: 'userId',
                targetKey: 'id'
            })
        }
    }
    products.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.REAL,
        stock: DataTypes.INTEGER,
        available: DataTypes.BOOLEAN,
        userId: DataTypes.INTEGER,
        img: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return products;
};