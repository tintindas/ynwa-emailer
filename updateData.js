const fs = require('fs/promises')
const { getNextMatch } = require('./dataHandlers/footballData')
const { updateTimer } = require('./dataHandlers/updateCountdownTimer')

const updateData = async () => {
  try {
    const path = './data/nextMatch.json'

    const data = await fs.readFile(path)
    let prevMatch = await JSON.parse(data)
    prevMatch = JSON.stringify(prevMatch)

    const match = await getNextMatch()
    const nextMatch = JSON.stringify(match)

    if (prevMatch !== nextMatch) {
      await fs.writeFile(path, nextMatch)
      await updateTimer(match.utcDate)
      console.log('Updated nextMatch.json and Countdown Timer')
    } else {
      console.log('No updates yet')
    }
  } catch (err) {
    console.error(err)
  }
}

updateData()