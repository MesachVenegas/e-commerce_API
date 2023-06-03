const UserRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');

class UserServices {
    static async registeredUser(data) {
        try {
            const { username, email, password } = data;
            const hashed = await bcrypt.hash(password, 10);
            const user = await UserRepository.insertUser({ username, email, password: hashed });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async searchUser(id) {
        try {
            const user = await UserRepository.findUser(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async loadAvatar(data) {
        try {
            const user = await UserRepository.updateUser(id, { url });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(id) {
        try {
            const user = await UserRepository.destroyUser(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;

