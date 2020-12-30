// imports
require('dotenv').config()
const axios = require('axios')

// API
const apiOptions = {
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_API_TOKEN
  }
}

const baseURL = 'http://api.football-data.org/v2'

// main
const getLeagueId = async (competition = 'premier league') => {
  //get all competitions
  try {
    const res = await axios.get(`${baseURL}/competitions/`, apiOptions)

    //array of all competitions
    const competitions = res.data.competitions
    competition = competition.toLowerCase()
    //find league by name
    const league = competitions.find(
      (item) =>
        (item.name && item.name.toLowerCase() === competition) ||
        (item.code && item.code.toLowerCase() === competition)
    )

    if (!league) {
      throw 'Wrong League name or Code'
    }
    // get league id
    leagueId = league.id

    return leagueId
  } catch (err) {
    console.error(err)

    if ((err = 'Wrong League name or Code')) {
      console.error(
        'Please find list of all supported competitions in data/competitions.json'
      )
    }

    return null
  }
}

// ;(async () => console.log(await getLeagueId('bl1')))()

const getTeamId = async (team, leagueId = 2021) => {
  // get all teams in given league
  try {
    const res = await axios.get(
      `${baseURL}/competitions/${leagueId}/teams`,
      apiOptions
    )

    //   array of all teams
    const teams = res.data.teams

    team = team.toLowerCase()
    //   get team by name
    const myTeam = teams.find(
      (item) =>
        (item.name && item.name.toLowerCase() === team) ||
        (item.shortname && item.shortname.toLowerCase() === team) ||
        (item.tla && item.tla.toLowerCase() === team)
    )

    if (!myTeam) {
      throw 'Wrong Team Identifier'
    }
    //   get team id
    const teamId = myTeam.id

    return [teamId, teams]
  } catch (err) {
    console.error(err)

    if ((err = 'Wrong Team Identifier')) {
      console.error(
        'Please find list of supported names, shortnames and tlas in data/teams.json'
      )
    }

    return [null, null]
  }
}

// ;(async () => console.log(await getTeamId('fcb', 2002)))()

const getNextMatch = async (teamId = 64) => {
  try {
    //   get scheduled matches for given team
    const res = await axios.get(
      `${baseURL}/teams/${teamId}/matches?status=SCHEDULED`,
      apiOptions
    )

    //   get details from next match
    const { utcDate, homeTeam, awayTeam } = res.data.matches[0]

    //   object with relevant details
    const match = {
      utcDate,
      homeTeam,
      awayTeam
    }

    return match
  } catch (err) {
    console.error(err)
  }
}

// ;(async () => console.log(await getNextMatch()))()

module.exports = { getLeagueId, getTeamId, getNextMatch }
