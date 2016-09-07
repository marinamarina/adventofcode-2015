'use strict';
const _ = require('lodash');

module.exports = {
    part1: i => {

        var parse = input => _.chain( input.match(/(\d)\1*/g) ).map(function(v) { return `${v.length}${v[0]}`; }).value().join('');

        return parse(i[0]);
    },

    part2: i => {
        return 2;
    }
};
