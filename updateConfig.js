const fs = require('fs/promises')
const { getLeagueId, getTeamId } = require('./dataHandlers/footballData')

const updateConfig = async () => {
  try {
    const data = await fs.readFile('config.json')
    let config = await JSON.parse(data)

    const { competition, team } = config

    const leagueId = await getLeagueId(competition)
    if (!leagueId) {
      return
    }

    const [teamId, teams] = await getTeamId(team, leagueId)
    if (!teamId) {
      return
    }

    config = {
      competition,
      team,
      leagueId,
      teamId
    }

    const configStr = JSON.stringify(config)
    await fs.writeFile('config.json', configStr)

    const teamsStr = JSON.stringify(teams)
    await fs.writeFile('./data/teams.json', teamsStr)
  } catch (err) {
    console.error(err)
  }
}

updateConfig()
