'use strict';
var _ = require('lodash');

function transformInput (input) {
    return input.split('').map(function(v) { return v; });
}

module.exports = {
    part1: function(input) {
        // 232
        var transformedInput = transformInput(input);

        return _.reduce(transformedInput, function(floor, v) {
          return (v==='(') ? floor+1 : floor-1;
      }, 0);
    },
    part2: function(input) {
        var transformedInput = transformInput(input);
        var floor = 0;

        return _.indexOf(
          _.transform(transformedInput, function(memo, v, i) {
              floor = (v==='(') ? floor+1 : floor-1;
              memo.push(floor);
          }),
          -1) + 1;
    }
};
