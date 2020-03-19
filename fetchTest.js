#!/usr/bin/env node

const fetch = require('node-fetch')

console.log(process.env)

async function getUserAsync(name) {
  let response = await fetch(`https://api.github.com/users/${name}`)
  let data = await response.json()
  return data
}

getUserAsync('yourUsernameHere').then(data => console.log(data))
