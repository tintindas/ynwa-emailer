const { calculateTimeRemaining } = require('../utils/date')

const buildEmail = (match) => {
  const { utcDate, homeTeam, awayTeam } = match
  const { days, hours, minutes, seconds } = calculateTimeRemaining(utcDate)
  const timerCode = 'u5i1r'

  const homeImagePath =
    'https://raw.githubusercontent.com/tintindas/ynwa-emailer/main/images/home.png'
  const awayImagePath =
    'https://raw.githubusercontent.com/tintindas/ynwa-emailer/main/images/away.png'

  const text = `
  Next match in ${days} days ${hours} hours ${minutes} and ${seconds}.
  ${homeTeam.name} vs. ${awayTeam.name}
  `

  const html = `<!DOCTYPE html>
  <html lang="en">
    <body style = "width: 450px">
      <div
        style="
          background-color: rgba(0, 0, 0, 0.005);
          padding: 5%;
          border-radius: 6px;
          box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        "
      >
        <div>
          <p style="text-align: center">
            <img
              src="${homeImagePath}"
              alt="home crest"
              style="
                margin: 0 5px;
                height: 50px;
                vertical-align: middle;
              "
            />
            <span style="font-weight: bold; padding-bottom: 5px">${homeTeam.name}</span>
          </p>
          <p style="text-align: center">  vs. </p>
          <p style="text-align: center">
            <img
            src="${awayImagePath}"
            alt="away crest"
            style="
            margin: 0 5px;
            height: 50px;
            vertical-align: middle;
            "
            />
            <span style="font-weight: bold; padding-bottom: 5px">${awayTeam.name}</span>
          </p>
          <table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center"><img src="http://i.countdownmail.com/${timerCode}.gif" style="display:inline-block!important;width:90%!important;max-width:492px!important;" border="0" alt="countdownmail.com"/></td></tr></tbody></table> 
        </div>
      </div>
    </body>
  </html>
  `

  return { html, text }
}

module.exports = { buildEmail }
