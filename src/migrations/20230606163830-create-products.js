'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            price: {
                allowNull: false,
                type: Sequelize.REAL
            },
            stock: {
                defaultValue: 1,
                type: Sequelize.INTEGER
            },
            available: {
                defaultValue: true,
                type: Sequelize.BOOLEAN
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "Users",
                    key: "id"
                },
                field: "user_id"
            },
            img: {
                type: Sequelize.ARRAY(DataTypes.STRING)
            },
        }, {
            timestamps: false,
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Products');
    }
};