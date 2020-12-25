const { calculateTimeRemaining } = require('./date')

const buildEmail = (match) => {
  const { utcDate, homeTeam, awayTeam } = match
  const { days, hours, minutes, seconds } = calculateTimeRemaining(utcDate)
  const timerCode = 'u5i1r'

  const homeTeamId = homeTeam.id.toString()
  const awayTeamId = awayTeam.id.toString()

  const text = `
  Next match in ${days} days ${hours} hours ${minutes} and ${seconds}.
  ${homeTeam.name} vs. ${awayTeam.name}
  `

  const crestURL = 'https://crests.football-data.org'

  const html = `<!DOCTYPE html>
  <html lang="en">
    <body style = "width: 400px" text-align="center">
      <div
        style="
          background-color: rgba(0, 0, 0, 0.005);
          padding: 5%;
          border-radius: 6px;
          box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        "
      >
        <div>
          <p>
            <img
              src="${crestURL}/${homeTeamId}.svg"
              alt="home crest"
              style="
                margin: 0 5px;
                height: 30px;
                width: 30px;
                vertical-align: middle;
              "
            />
            <span style="font-weight: bold; padding-bottom: 5px">${homeTeam.name}</span>
            vs.
            <span style="font-weight: bold; padding-bottom: 5px">${awayTeam.name}</span>
            <img
              src="${crestURL}/${awayTeamId}.svg"
              alt="away crest"
              style="
                margin: 0 5px;
                height: 30px;
                width: 30px;
                vertical-align: middle;
              "
            />
          </p>
          <table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center"><img src="http://i.countdownmail.com/u5i1r.gif" style="display:inline-block!important;width:90%!important;max-width:492px!important;" border="0" alt="countdownmail.com"/></td></tr></tbody></table> 
        </div>
      </div>
    </body>
  </html>
  `

  return { html, text }
}

module.exports = { buildEmail }

buildEmail({
  utcDate: '2020-12-27T16:30:00Z',
  homeTeam: { id: 64, name: 'Liverpool FC' },
  awayTeam: { id: 74, name: 'West Bromwich Albion FC' }
})
