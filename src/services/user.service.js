const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
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

    static async userLogin(sessionData) {
        try {
            const { reqEmail, reqPassword } = sessionData;
            const user = await UserRepository.login(reqEmail);

            if (!user) {
                throw new Error({
                    status: 404,
                    error: 'user not found',
                    message: 'The user could not be found'
                })
            }

            const validPass = await bcrypt.compare(reqPassword, user.password);

            if (!validPass) {
                throw new Error({
                    status: 400,
                    name: "Invalid password",
                    message: 'The password does not match'
                });
            }
            const { id, username, email, url, registeredAt, updatedAt } = user;
            const userData = { id, username, email, url, registeredAt, updatedAt };
            const token = jwt.sign(userData, process.env.JWT_KEYWORD, {
                algorithm: process.env.JWT_ALGORITHM,
                expiresIn: '1h'
            })

            userData.token = token;
            return userData;
        } catch (error) {
            throw error;
        }
    }

    static async loadAvatar(id, file) {
        try {
            const response = await UserRepository.setAvatarUrl(id, { url: file.path });
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserServices;

