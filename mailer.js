require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.FROM,
    pass: process.env.PASSWORD,
  },
});

const mailer = async () => {
  try {
    let info = await transporter.sendMail({
      from: process.env.FROM,
      to: process.env.TO,
      subject: "Test Email",
      text: "YNWA!",
      html: "<h1>YNWA</h1>",
    });
    console.log(`Message sent: ${info.messageId}`);
  } catch (err) {
    console.error(err);
  }
};

mailer();
