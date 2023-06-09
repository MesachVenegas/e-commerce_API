const { Carts } = require('../models');

const getCart = async (id) => {
    return await Carts.findAll({ where: { id: id}});
}

const createUserCart = async (data) => {
    console.log(data);
    const cart = "await"
    // const cart = await Carts.create(data);
    return cart;
}

const updateTotal = async (id, data) => {
    return await Carts.update(data, { where: { id } });
}

module.exports = {
    getCart,
    createUserCart,
    updateTotal
};
