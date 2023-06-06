'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ProductInOrders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            orderId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "Orders",
                    key: "id"
                },
                field: "order_id"
            },
            productId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "Products",
                    key: "id"
                },
                field: "product_id"
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            price: {
                allowNull: false,
                type: Sequelize.REAL
            },
            status: {
                defaultValue: false,
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ProductInOrders');
    }
};