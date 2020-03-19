const fetch = require('node-fetch')

const { API_KEY } = process.env

const url = `https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${API_KEY}`

describe('Status', () => {
  var a
  it('fetches properly', async () => {
    const response = await fetch(url)
    const headers = response.headers
    const data = response.json()
    console.log('FETCH STATUS AGAIN HEADERS:')
    console.log(headers)
    console.log('FETCH STATUS AGAIN DATA:')
    console.log(data)
  })
})
