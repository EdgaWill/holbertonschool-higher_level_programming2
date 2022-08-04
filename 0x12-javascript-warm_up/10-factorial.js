#!/usr/bin/node
const var1 = parseInt(process.argv[2]);
if (!var1) {
  console.log(1);
} else {
  function factorial (n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return (n * factorial(n - 1));
  }
  console.log(factorial(var1));
}
