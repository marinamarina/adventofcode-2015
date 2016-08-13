'use strict';
var _ = require('lodash'),
    fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf8').trim().split('').map(function(v) {
        return v;
      });

module.exports = {
    one: function() {
      return _.reduce(input, function(floor, v) {
          return (v==='(') ? floor+1 : floor-1;
      }, 0);
    },
    two: function() {
        var floor = 0;
        return _.indexOf(
          _.transform(input, function(memo, v, i) {
              floor = (v==='(') ? floor+1 : floor-1;
              memo.push(floor);
          }),
          -1) + 1;
    }
};
