'use strict';
var _ = require('lodash');

module.exports = {
    part1: function(input) {

        return _.reduce(input[0].split(''), function(floor, v) {
          return (v==='(') ? floor+1 : floor-1;
      }, 0);
    },
    part2: function(input) {
        var floor = 0;

        return _.indexOf(
          _.transform(input[0].split(''), function(memo, v, i) {
              floor = (v==='(') ? floor+1 : floor-1;
              memo.push(floor);
          }),
          -1) + 1;
    }
};
