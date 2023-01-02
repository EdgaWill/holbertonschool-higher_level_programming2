#!/usr/bin/node
const var1 = parseInt(process.argv[2]);
console.log(isNaN(var1) ? 'Not a number' : `My number: ${var1}`);
