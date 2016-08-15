'use strict';
var _ = require('lodash'),
    fs = require('fs');

module.exports = {
    part1: i => {
        //1342
        let rawStringLength = i.join("").length;
        let escapedStringLength = i.map(v =>v.replace(/\\x[a-z0-9]{2}|\\"|\\\\/g, '*').replace(/\"/g, "")).join('').length;

        return rawStringLength - escapedStringLength;
    },

    part2: function() {
        return 'two';
    }
};
