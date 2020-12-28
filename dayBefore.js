const { scheduler } = require('./utils/schedule')

const oneDayInMs = 24 * 60 * 60 * 1000
scheduler(oneDayInMs)
