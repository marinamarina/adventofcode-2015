'use strict';
var _ = require('lodash'),
    fs = require('fs');

function transformInput(input) {
    return input.map(function(v) {
        return _.sortBy(_.map(v.split('x'), _.parseInt));
    });
}

module.exports = {
    part1 : function(input) {
        var transformedInput = transformInput(input);

        return _.reduce(transformedInput, function(sum, v) {
            return sum + (3*v[0]*v[1] + 2*v[1]*v[2] + 2*v[0]*v[2]);
        }, 0);

    },
    part2 : function(input) {
        var transformedInput = transformInput(input);

        return _.reduce(transformedInput, function(sum, v) {
            return sum + (2*v[0] + 2*v[1] + v[0]*v[1]*v[2]);
        }, 0);
    }
};
