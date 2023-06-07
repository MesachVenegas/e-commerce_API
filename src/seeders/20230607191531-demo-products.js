'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Products',[
            {
                name: "Ryzen 5 3600X",
                description: "AMD Ryzen 5 3600X 3.8Ghz, turbo 4.4Ghz, 6 Cores 12 Threats 95w 32Mb cache",
                price: 149.99,
                stock: 10,
                available: true,
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Aourus Gaming Elite OC RX580 8Gb Dual Fan",
                description: "GPU AMD RX580 powerfull Dual Fans to stay fresh, obtain the best performance",
                price: 349.00,
                stock: 2,
                available: true,
                user_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Samsung evo 970 nvem 1T 280",
                description: "SSD NVEM Samsung EVO 970 the most speed storage, up to 5500mb/s to read and 4300mb/s write",
                price: 120.00,
                stock: 0,
                available: false,
                user_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Cooler Master MasterWatt 600W 80 Plus Bronze",
                description: "A Powerfull Semi-Modular PSU , silent and efficient under 15% load, the masterwatt fan remains idle, offering zero dBA noise",
                price: 105.45,
                stock: 2,
                available: false,
                user_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
