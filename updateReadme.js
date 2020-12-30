const fs = require('fs/promises')

const updateReadMe = async () => {
  const data = await fs.readFile('./data/nextMatch.json')
  const match = JSON.parse(data)
  const { homeTeam, awayTeam } = match

  const ReadMe = `
  # ynwa-emailer
  Never miss a game again! Get reminders about your favourite team's next fixture right in your inbox.
  
  ## Preview
  <p>
  <img align="center" src="./images/home.png" height=50>  
  <strong>${homeTeam.name}</strong> vs. <strong>${awayTeam.name}</strong>
  <img align="center" src="./images/away.png" height=50>  
  </p>
  
  <table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td align="center"><img src="http://i.countdownmail.com/u5i1r.gif" style="display:inline-block!important;width:90%!important;max-width:492px!important;" border="0" alt="countdownmail.com"/></td></tr></tbody></table>
  
  ## For Liverpool Supporters
  Raise a pull request with your email address and I will add you to the mailing list.
  
  ## Setup
  For setting up this project see [Setup.md](./Setup.md)
  
  ## Contributing
  Contributions are welcome. Please read [Contributions.md](./Contributions.md) for more information.`

  await fs.writeFile('README.md', ReadMe)
}

updateReadMe()
