const { getNextMatch } = require('./dataHandlers/footballData')
const { buildEmail } = require('./emailHandlers/buildMail')
const { mailer } = require('./emailHandlers/mailer')
const { convertImage } = require('./utils/convertImage')

const sendMail = async () => {
  try {
    const match = await getNextMatch()
    await Promise.all([
      convertImage(match.homeTeam.id, 'home'),
      convertImage(match.awayTeam.id, 'away')
    ])
    const { text, html } = buildEmail(match)

    //   console.log(text, html)
    mailer('YNWA Mailer', text, html)
  } catch (err) {
    console.error(err)
  }
}

sendMail()
