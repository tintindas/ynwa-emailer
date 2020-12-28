const { sendMail } = require('../emailHandlers/sendMail')
const fs = require('fs/promises')

const scheduler = async (timeLimitInMs) => {
  try {
    const data = await fs.readFile('./data/nextMatch.json')
    const { utcDate } = await JSON.parse(data)
    const matchDate = new Date(utcDate)

    const now = new Date()

    const timeRemaining = matchDate - now

    if (timeRemaining <= timeLimitInMs && timeRemaining >= 0) {
      sendMail()
    } else {
      console.log('Else ran')
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = { scheduler }
