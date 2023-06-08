const { Carts } = require('../models');

const getCart = async () => {
    return await Carts.findAll();
}

const createUserCart = async (data) => {
    return await Carts.create(data);
}

const updateTotal = async (id, data) => {
    return await Carts.update(data, { where: { id } });
}

module.exports = {
    getCart,
    createUserCart,
    updateTotal
};
