const transporter = require('./transporter');
const path = require('path');
const ejs = require('ejs');

const sendNewEmail = (email, doc, attachments, subject) => {
    transporter.sendMail({
        from: 'mesachman@gmail.com',
        to: email,
        subject: subject,
        text: 'Welcome to E-commerce Services, the most popular e-commerce service',
        html: doc, attachments,
    })
        .then(() => console.log(`A email was sent`))
        .catch(err => console.error(err));
}

const sendWelcomEmail = async (email, data) => {
    const filePath = path.join(__dirname, '../views/welcome.ejs');
    const doc = await ejs.renderFile(filePath, data);
    const subject = `Welcome to NetShop ${data.username}!`;
    const attachments = [
        {
            filename: "illo_welcome_1.png",
            path: path.join(__dirname, "../views/images/illo_welcome_1.png"),
            cid: "welcome_image",
        },
        {
            filename: "Logo.png",
            path: path.join(__dirname, "../views/images/Logo.png"),
            cid: "logo",
        },
        {
            filename: "facebook2x.png",
            path: path.join(__dirname, "../views/images/facebook2x.png"),
            cid: "facebook",
        },
        {
            filename: "twitter2x.png",
            path: path.join(__dirname, "../views/images/twitter2x.png"),
            cid: "twitter",
        },
        {
            filename: "instagram2x.png",
            path: path.join(__dirname, "../views/images/instagram2x.png"),
            cid: "instagram",
        },
        {
            filename: "pinterest2x.png",
            path: path.join(__dirname, "../views/images/pinterest2x.png"),
            cid: "pinterest",
        },
    ];

    sendNewEmail(email, doc, attachments, subject);
};

module.exports = sendWelcomEmail;