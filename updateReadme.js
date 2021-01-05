const fs = require('fs/promises')

const updateReadMe = async () => {
  const data = await fs.readFile('./data/nextMatch.json')
  const match = await JSON.parse(data)
  const { homeTeam, awayTeam } = match

  let timer = await fs.readFile('./config.json')
  timer = await JSON.parse(timer)
  timer = timer.timer

  const ReadMe = `
  # ynwa-emailer
  Never miss a game again! Get reminders about your favourite team's next fixture right in your inbox.
  
  ## Preview
  <p align="center">
  <img align="center" src="./images/home.png" height=50>  
  <strong>${homeTeam.name}</strong> vs. <strong>${awayTeam.name}</strong>
  <img align="center" src="./images/away.png" height=50>  
  </p>

  <p align="center">
    <img src="http://i.countdownmail.com/${timer}.gif" style="display:inline-block!important;width:90%!important;max-width:492px!important;" border="0" alt="countdownmail.com"/>
  </p> 
  
  ## For Liverpool Supporters
  Raise an issue with your email address and I will add you to the mailing list.
  
  ## Setup
  For setting up this project see [Setup.md](./Setup.md)
  
  ## Contributing
  Contributions are welcome. Please read [Contributions.md](./Contributions.md) for more information.`

  await fs.writeFile('README.md', ReadMe)
}

updateReadMe()
