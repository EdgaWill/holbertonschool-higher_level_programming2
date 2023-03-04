#!/usr/bin/node
const vi = require('facus');
const request = require('request');
request(process.argv[2]).pipe(vi.createWriteStream(process.argv[3]));
