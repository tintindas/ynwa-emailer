// imports
require('dotenv').config()
const axios = require('axios')
const fs = require('fs')

// API
const apiOptions = {
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_API_TOKEN
  }
}

const baseURL = 'http://api.football-data.org/v2'

// main
const getLeagueId = async (competition = 'premier league') => {
  //   get all competitions
  const res = await axios.get(`${baseURL}/competitions/`, apiOptions)

  // array of all competitions
  const competitions = res.data.competitions

  // find league by name
  const league = competitions.find(
    (item) => item.name.toLowerCase() === competition.toLowerCase()
  )
  // get league id
  leagueId = league.id

  return leagueId
}

// ;(async () => console.log(await getLeagueId('premier league')))()

const getTeamId = async (team, leagueId = 2021) => {
  // get all teams in given league
  const res = await axios.get(
    `${baseURL}/competitions/${leagueId}/teams`,
    apiOptions
  )

  //   array of all teams
  const teams = res.data.teams

  //   get team by name
  const myTeam = teams.find(
    (item) => item.name.toLowerCase() === team.toLowerCase()
  )

  //   get team id
  const teamId = myTeam.id

  return teamId
}

// ;(async () => console.log(await getTeamId('liverpool fc')))()

const getNextMatch = async (teamId = 64) => {
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
}

;(async () => console.log(await getNextMatch()))()

module.exports = { getLeagueId, getTeamId, getNextMatch }
