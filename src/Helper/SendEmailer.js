const nodemailer = require("nodemailer");
const SendEmailUtility = async (email, subject, message) => {
    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: false,
            auth: {
                user: 'test@phoner.info',
                pass: '3r+1V;{RrHFgh>{'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: 'Students Panel <test@phoner.info>',
            to: email,
            subject: subject,
            text: message
        };

        return await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
}

module.exports = SendEmailUtility