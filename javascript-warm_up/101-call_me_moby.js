#!/usr/bin/node

let callMeMoby = (x, theFunction) => {
  for (; x > 0; x--) {
    theFunction();
  }
};

module.exports = { callMeMoby };
