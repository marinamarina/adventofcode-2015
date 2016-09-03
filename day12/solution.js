'use strict';
const _ = require('lodash');

module.exports = {
    part1: i => {
        return _.reduce(
            i[0].toString().match(/(-?[1-9]\d{0,2})/g),
            (memo, v, k) => { return memo + parseInt(v) },
         0);
    },

    part2: i => {
        return 2;
    }
};
