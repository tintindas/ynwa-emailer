const fs = require('fs/promises')
const { buildEmail } = require('./buildMail')
const { mailer } = require('./mailer')
const { convertImage } = require('../utils/convertImage')

const sendMail = async () => {
  try {
    const data = await fs.readFile('./data/nextMatch.json')
    const match = await JSON.parse(data)

    const { text, html } = buildEmail(match)
    const subject = `${match.homeTeam.name} vs. ${match.awayTeam.name}`

    // console.log(text, html)
    mailer(subject, text, html)
  } catch (err) {
    console.error(err)
  }
}

// sendMail()
module.exports = { sendMail }
