const { Users } = require('../models');

const insertUser = async (newUser) => {
    const user = await Users.create(newUser);
    return user;
}

const findUser = async (id) => {
    const user = await Users.findByPk(id, {
        attributes: {
            exclude: ['password'],
        }
    });
    return user;
}

const updateUsername = async (id, newUserName) => {
    const user = await Users.update(newUserName, { where: { id } });
    return user;
}

const destroyUser = async (id) => {
    const user = await Users.destroy({ where: { id } });
    return user;
}

const login = async (email) => {
    const user = await Users.findOne({ where: { email } });
    return user;
}

const setAvatarUrl = async (id, url) => {
    const user = await Users.update(url, { where: { id: id } });
    return user;
}

const recoveryPassword = async (id, newPass) => {
    const user = await Users.update(newPass, { where: id });
    return user;
}

module.exports = {
    insertUser,
    findUser,
    updateUsername,
    destroyUser,
    login,
    recoveryPassword,
    setAvatarUrl
};
