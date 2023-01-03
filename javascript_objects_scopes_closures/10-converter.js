#!/usr/bin/node
exports.converter = function (prim) {
  return function (fun) {
    return fun.toString(prim);
  };
};
