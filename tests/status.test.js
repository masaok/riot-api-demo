const fetch = require('node-fetch')

const { API_KEY } = process.env

const url = `https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${API_KEY}`

// https://developer.riotgames.com/apis#lol-status-v3/GET_getShardData
describe('Status', () => {
  it('fetches properly', async () => {
    const response = await fetch(url)
    const headers = response.headers
    const data = await response.json()
    // console.log('FETCH STATUS AGAIN HEADERS:')
    // console.log(headers)
    console.log('FETCH STATUS AGAIN DATA:')
    console.log(data)

    // https://jestjs.io/docs/en/expect
    expect('name' in data).toBeTruthy()
    expect(typeof data.name).toBe('string')
  })
})
