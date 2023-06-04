const { users } = require('../models');

const insertUser = async (newUser) => {
    const user = await users.create(newUser);
    return user;
}

const findUser = async (id) => {
    const user = await users.findByPk(id, {
        attributes: {
            exclude: ['password'],
        }
    });
    return user;
}

const updateUser = async (id, newData) => {
    const user = await users.update(newData, { where: id });
    return user;
}

const destroyUser = async (id) => {
    const user = await users.destroy({ where: {id}});
    return user;
}

const login = async (email) => {
    const user = await users.findOne({where: {email}});
    return user;
}

const recoveryPassword = async (id, newPass) => {
    const user = await users.update(newPass, { where: id });
    return user;
}

module.exports = {
    insertUser,
    findUser,
    updateUser,
    destroyUser,
    login,
    recoveryPassword,
};
