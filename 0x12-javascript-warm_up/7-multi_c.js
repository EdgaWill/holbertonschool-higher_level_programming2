#!/usr/bin/node
const var1 = parseInt(process.argv[2]);
const var2 = 'C is fun';
if (isNaN(var1)) {
  console.log('Missing number of occurrences');
} else {
  for (let a = 0; a < var1; a++) {
    console.log(var2);
  }
}
