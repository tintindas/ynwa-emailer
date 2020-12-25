require('dotenv').config()
const axios = require('axios')

const baseURL = 'https://countdownmail.com/api'
const timerCode = 'u5i1r'

const updateTimer = async (time = '2020-12-27 16:30:00') => {
  const updateData = {
    skin_id: 1,
    name: 'test',
    time_end: '2020-12-28 18:38:49',
    time_zone: 'UTC',
    font_family: 'Roboto-Bold',
    color_primary: 'FF3A43',
    color_text: 'FFFFFF',
    color_bg: '000000',
    transparent: '0',
    lang_local: '0',
    font_size: '38',
    day: '1',
    lang: 'en',
    expired_mes_on: '1',
    expired_mes: 'This offer has expired',
    labels: '1',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    advanced: '1',
    AdvancedParams: {
      width: '496.00',
      height: '100.00',
      offsetLeft: '25.00',
      boxWidth: '50.00',
      boxHeight: '76.00',
      labelOffsetTop: '0.00',
      fontSize: '14.00',
      labelsColor: '8E2025'
    }
  }
  try {
    const res = await axios.post(`${baseURL}/update/${timerCode}`, updateData, {
      headers: {
        Authorization: process.env.TIMER_API_TOKEN,
        'Content-Type': 'application/json'
      }
    })

    console.log(res.data)
  } catch (err) {
    console.error(err)
  }
}

// ;(async () => await updateTimer())()
