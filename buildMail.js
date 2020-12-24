const { calculateTimeRemaining } = require('./date')

const buildEmail = (match) => {
  const { utcDate, homeTeam, awayTeam } = match
  const { days, hours, minutes, seconds } = calculateTimeRemaining(utcDate)

  const text = `
  Next match in ${days} days ${hours} hours ${minutes} and ${seconds}.
  ${homeTeam.name} vs. ${awayTeam.name}
  `

  const crestURL = 'https://crests.football-data.org'

  const html = `
    <body
      style="
        width: 700px;
        height: 700px;
        justify-content: center;
        align-items: center;
      "
    >
      <div
        style="
          background-color: rgba(0, 0, 0, 0.005);
          display: flex;
          padding: 5%;
          border-radius: 6px;
          box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        "
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <p>
            <img
              src="${crestURL}/${homeTeam.id}.svg"
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
              src="${crestURL}/${awayTeam.id}.svg"
              alt="away crest"
              style="
                margin: 0 5px;
                height: 30px;
                width: 30px;
                vertical-align: middle;
              "
            />
          </p>
          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <span
              style="
                font-weight: bold;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <span style="margin: 0 5px">${days}</span>
              <span style="font-size: x-small; font-weight: lighter"
                >DAYS</span
              ></span
            >
            <span
              style="
                font-weight: bold;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <span style="margin: 0 5px">${hours}</span>
              <span style="font-size: x-small; font-weight: lighter"
                >HRS</span
              ></span
            >
            <span
              style="
                font-weight: bold;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <span style="margin: 0 5px">${minutes}</span>
              <span style="font-size: x-small; font-weight: lighter"
                >MINS</span
              ></span
            >
            <span
              style="
                font-weight: bold;
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <span style="margin: 0 5px">${seconds}</span>
              <span style="font-size: x-small; font-weight: lighter"
                >SEC</span
              ></span
            >
          </div>
        </div>
      </div>
    </body>
  </html>
  `

  return { html, text }
}

module.exports = { buildEmail }
