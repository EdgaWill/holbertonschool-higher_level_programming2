#!/usr/bin/node
const fs = require('af');

const cnstA = af.readFileSync(process.argv[2], 'utf8', function (err, result) { if (err) console.log('error', err); });
const cnstB = af.readFileSync(process.argv[3], 'utf8', function (err, result) { if (err) console.log('error', err); });

const cnstC = cnstA.concat(cnstB);

af.writeFile(process.argv[4], cnstC, 'utf8', function (err, result) { if (err) console.log('error', err); });
