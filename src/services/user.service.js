const UserRepository = require('../repositories/user.repository');
const { sendWelcomEmail } = require('../utils/sendEmail');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserServices {
    static async registeredUser(data) {
        try {
            const { username, email, password } = data;
            const hashed = await bcrypt.hash(password, 10);
            const user = await UserRepository.insertUser({ username, email, password: hashed });
            const token = 'token'
            sendWelcomEmail(user.email, { username: user.username, verifyToken: token });
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

    static async userLogin(reqEmail, reqPassword, next) {
        try {
            //  Buscar si el usuario con el email existe.
            const user = await UserRepository.login(reqEmail);
            // Si no existe se lanza error.
            if (!user) {
                return next({
                    status: 404,
                    error: "Invalid email",
                    message: 'The user could not be found or not exist'
                })
            }
            // Verificamos que la contraseña ingresada coincida con la almacenada.
            const validPass = await bcrypt.compare(reqPassword, user.password);
            // Si no lanzamos error de password incorrecta.
            if (!validPass) {
                return next({
                    status: 404,
                    error: "Invalid password",
                    message: 'The password does not match'
                });
            }
            // Extracion de datos para la generacion del token.
            const { id, username, email, url, registeredAt, updatedAt } = user;
            // Creamos los datos a retornar como respuesta con el access-token.
            const userData = { id, username, email, url, registeredAt, updatedAt };
            // Generacion del access-token.
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

    static async editUsername(id, username) {
        try {
            const response = await UserRepository.updateUsername(id, username);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;

