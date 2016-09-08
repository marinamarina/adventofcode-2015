'use strict';
const _ = require('lodash');
const look_and_say = input =>input.match(/(\d)\1*/g).map((v) => `${v.length}${v[0]}`).join('');

module.exports = {
    part1: i => {
        let result = i[0];
        _.times(40, () => { result = look_and_say(result) });

        return result.length;
    },

    part2: i => {
       let result = i[0];
        _.times(50, () => { result = look_and_say(result) });

         return result.length;
    }
};
