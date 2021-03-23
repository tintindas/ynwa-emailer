require('dotenv').config()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.FROM,
    pass: process.env.PASSWORD
  }
})

const mailer = async (subject, text, html) => {
  try {
    let info = await transporter.sendMail({
      from: process.env.FROM,
      to: [process.env.TO, 'debargho.basak1999@gmail.com']
      subject: subject,
      text: text,
      html: html
    })
    console.log(`Message sent: ${info.messageId}`)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { mailer }
