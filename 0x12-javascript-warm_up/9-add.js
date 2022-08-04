#!/usr/bin/node
const var1 = parseInt(process.argv[2]);
const var2 = parseInt(process.argv[3]);
if (!isNaN(var1) && !isNaN(var2)) {
  console.log(var1 + var2);
} else {
  console.log(NaN);
}
