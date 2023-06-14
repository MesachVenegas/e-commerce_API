const transporter = require('./transporter');
const path = require('path');
const ejs = require('ejs');

const sendOrderEmail = (email, doc, subject) => {
    transporter.sendMail({
        from: 'mesachman@gmail.com',
        to: email,
        subject: subject,
        text: 'Thanks for shopping with us! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum ducimus, non, eveniet neque dolores voluptas architecto sed, voluptatibus aut dolorem odio. Cupiditate a recusandae, illum cum voluptatum modi nostrum.',
        html: doc
    })
        .then(() => console.log(`A email of bought confirmation was sent`))
        .catch(err => console.error(err));
}


const sendBoughtEmail = async (email, data) => {
    const filePath = path.join(__dirname, "../views/order.ejs");
    const doc = await ejs.renderFile(filePath, data);
    const subject = `Thanks for your order ${data.username}`;

    sendOrderEmail(email, doc, subject);
}

module.exports = sendBoughtEmail;