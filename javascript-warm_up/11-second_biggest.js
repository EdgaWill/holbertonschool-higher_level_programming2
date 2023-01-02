#!/usr/bin/node
const var1 = process.argv.splice(2).map((e) => parseInt(e)).sort((a, b) => b - a);
if (var1.length <= 1) console.log(0);
else console.log(var1[1]);
