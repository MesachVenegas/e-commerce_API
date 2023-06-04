const UserService = require('../services/user.service');

const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        await UserService.registeredUser(data);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserService.searchUser(id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const userDelete = async (req, res, next) => {
    try {
        const { id } = req.params;
        await UserService.deleteUser(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

const logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const data = await UserService.userLogin({ reqEmail: email, reqPassword: password });
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const updateAvatar = async (req, res, next) => {
    try {
        const {id} = req.params;
        const file = req.file;
        await UserService.loadAvatar(id, file);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getUser,
    userDelete,
    updateAvatar,
    logIn
};
