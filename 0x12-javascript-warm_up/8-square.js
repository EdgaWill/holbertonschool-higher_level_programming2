#!/usr/bin/node
const var1 = parseInt(process.argv[2]);
const var2 = [];

if (isNaN(var1)) console.log('Missing size');
else {
  for (let a = 0; a < var1; a++) var2.push('X');
  var2.forEach(() => console.log(var2.join('')));
}
