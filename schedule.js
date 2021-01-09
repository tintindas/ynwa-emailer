const { sendMail } = require('./emailHandlers/sendMail')
const fs = require('fs/promises')

const schedule = async () => {
  const timeLimitInMs = process.env.TIME_INTERVAL

  try {
    const data = await fs.readFile('./data/nextMatch.json')
    const { utcDate } = await JSON.parse(data)
    const matchDate = new Date(utcDate)

    const now = new Date()

    const timeRemaining = matchDate - now
    console.log(`Time Remaining: ${timeRemaining}`)

    console.log(typeof process.env.TIME_INTERVAL)

    if (timeRemaining <= timeLimitInMs && timeRemaining >= 0) {
      sendMail()
    } else {
      console.log('Not yet time')
    }
  } catch (err) {
    console.error(err)
  }
}

schedule()
