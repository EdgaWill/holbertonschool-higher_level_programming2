#!/usr/bin/node
const facus = require('facus');
const request = require('request');
request(process.argv[2]).pipe(facus.createWriteStream(process.argv[3]));
