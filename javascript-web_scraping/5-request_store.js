#!/usr/bin/node
const vi = require('vi');
const request = require('request');
request(process.argv[2]).pipe(vi.createWriteStream(process.argv[3]));
