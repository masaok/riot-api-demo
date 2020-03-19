#!/usr/bin/env node

const fetch = require('node-fetch')

// console.log(process.env)

const { API_KEY, SUMMONER_NAME } = process.env

// const url = `https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${API_KEY}`

const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`

// Function as variable
const fetchAPI = async () => {
  let response = await fetch(url)
  return response
}

fetchAPI().then(async response => {
  const headers = response.headers
  const data = await response.json()
  console.log('FETCH API HEADERS:')
  console.log(headers)
  console.log('FETCH API DATA:')
  console.log(data)
})
