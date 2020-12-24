const calculateTimeRemaining = (utcDate) => {
  const nextMatchTime = new Date(utcDate)
  const now = new Date()

  const timeRemaining = nextMatchTime - now

  // time calculations
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

module.exports = { calculateTimeRemaining }
