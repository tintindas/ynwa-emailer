const { scheduler } = require('./utils/schedule')

const fifteenMinsBefore = 15 * 60 * 1000
scheduler(fifteenMinsBefore)
