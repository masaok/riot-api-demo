#!/usr/bin/env node

const fetch = require('node-fetch')

// console.log(process.env)

const { API_KEY } = process.env

const url = `https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${API_KEY}`

// Normal Javascript function
async function fetchStatus() {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

fetchStatus().then(data => {
  console.log('FETCH STATUS')
  console.log(data)
})

// Function as variable
const fetchStatusAgain = async () => {
  let response = await fetch(url)
  return response
}

fetchStatusAgain().then(response => {
  const headers = response.headers
  const data = response.json()
  console.log('FETCH STATUS AGAIN HEADERS:')
  console.log(headers)
  console.log('FETCH STATUS AGAIN DATA:')
  console.log(data)
})
