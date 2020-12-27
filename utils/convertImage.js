const axios = require('axios')
const sharp = require('sharp')

const convertImage = async (id, filename) => {
  const baseURL = 'https://crests.football-data.org'
  const crestURL = `${baseURL}/${id}.svg`
  const filepath = `images/${filename}.png`

  const input = (await axios({ url: crestURL, responseType: 'arraybuffer' }))
    .data

  try {
    sharp(input).png().toFile(filepath)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { convertImage }
