const { getNextMatch } = require('./data')
const { buildEmail } = require('./buildMail')
const { mailer } = require('./mailer')

const sendMail = async () => {
  const match = await getNextMatch()
  const { text, html } = buildEmail(match)

  //   console.log(text, html)
  mailer('YNWA Mailer', text, html)
}

sendMail()
