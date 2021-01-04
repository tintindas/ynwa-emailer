const fs = require('fs/promises')
const { getLeagueId, getTeamId } = require('./dataHandlers/footballData')
const jsonFormat = require('json-format')

const updateConfig = async () => {
  try {
    const data = await fs.readFile('config.json')
    let config = await JSON.parse(data)

    const { competition, team, timer } = config

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
      teamId,
      timer
    }

    const formatConfig = {
      type: 'space',
      size: 2
    }

    const configStr = jsonFormat(config, formatConfig)
    await fs.writeFile('config.json', configStr)

    const teamsStr = jsonFormat(teams, formatConfig)
    await fs.writeFile('./data/teams.json', teamsStr)
  } catch (err) {
    console.error(err)
  }
}

updateConfig()
