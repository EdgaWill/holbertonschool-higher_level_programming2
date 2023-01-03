#!/usr/bin/node
const Rectangle = require('./5-square');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c === undefined) c = 'X';

    for (let a = 0; a < this.height; a++) {
      console.log(c.repeat(this.height));
    }
  }
}

module.exports = Square;
