#!/usr/bin/node
// script prints all characters of a Star Wars movie
const request = require('request');

axios.get(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`)
  .then(response => {
    response.data.characters.forEach(async (data) => {
      await request.get(data)
        .then(response => {
          console.log(response.data.name);
        });
    });
  })
  .catch(err => {
    console.log('Error:', err);
  });
