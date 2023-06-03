const UserService = require('../services/user.service');

const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        await UserService.registeredUser(data);
        res.status(200).send();
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createUser
};
