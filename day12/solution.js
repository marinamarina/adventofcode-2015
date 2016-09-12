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
        let result = 0;

        let scan = function (obj) {
            if (_.isObject(obj) && _.every(obj, v => v !== 'red')) {
                _.forEach(obj, value => scan(value));
            } else if (_.isArray(obj)) {
                _(obj).forEach(value => scan(value));
            } else if (_.isNumber(obj)) {
                result += obj;
            };

            return result;
        };

        return scan(JSON.parse(i[0]));
    }
};
