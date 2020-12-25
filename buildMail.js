const { calculateTimeRemaining } = require('./date')

const buildEmail = (match) => {
  const { utcDate, homeTeam, awayTeam } = match
  const { days, hours, minutes, seconds } = calculateTimeRemaining(utcDate)

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
              src=""
              alt="home crest"
              style="
                margin: 0 5px;
                height: 30px;
                width: 30px;
                vertical-align: middle;
              "
            />
            <span style="font-weight: bold; padding-bottom: 5px">Home Team</span>
            vs.
            <span style="font-weight: bold; padding-bottom: 5px">Away Team</span>
            <img
              src=""
              alt="away crest"
              style="
                margin: 0 5px;
                height: 30px;
                width: 30px;
                vertical-align: middle;
              "
            />
          </p>
  
          <table width="100%" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td align="center">
                  <img
                    src="https://i.countdownmail.com/u5diw.gif"
                    style="
                      display: inline-block !important;
                      width: 90% !important;
                      max-width: 176px !important;
                    "
                    border="0"
                    alt="countdownmail.com"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
  </html>
  `

  return { html, text }
}

module.exports = { buildEmail }
