require('dotenv').config()
const axios = require('axios')
const fs = require('fs')

const writeToFile = (filename, data) => {
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err)
    }
  })
}

const apiOptions = {
  headers: {
    'X-Auth-Token': process.env.API_TOKEN
  }
}

const baseURL = 'http://api.football-data.org/v2'

const get_competitions = async () => {
  const res = await axios.get(`${baseURL}/competitions/`, apiOptions)

  const competitions = res.data.competitions

  writeToFile('competitions.json', competitions)
}

const get_teams = async () => {
  const res = await axios.get(`${baseURL}/competitions/2021/teams`, apiOptions)

  const teams = res.data

  writeToFile('teams.json', teams)
}

const get_matches = async () => {
  const res = await axios.get(
    `${baseURL}/teams/64/matches?status=SCHEDULED`,
    apiOptions
  )

  const matches = res.data

  writeToFile('matches.json', matches)
}

get_matches()
// get_teams();
// get_competitions();
