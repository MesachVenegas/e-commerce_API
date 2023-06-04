const nodemailer = require('nodemailer');
require('dotenv').config();

/*
      * hotmail transporter example
        service: 'hotmail',
        auth: {
            user: username@hotmail.com
            password: password
        }
*/
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.G_USER,
        pass: process.env.G_PASS
    }
});

module.exports = transporter;
