'use strict';
var _ = require('lodash'),
    fs = require('fs');

module.exports = {
    part1: (input) => {
        // 1342
        let i = input.split('\n');
        let unescapedArray = i.map((v) => { return v.replace(/\"/g, ""); });

        let rawStringLength = i.join("").length;
        let escapedStringLength = i.map((v) => {
            return v.replace(/\"/g, "").replace(/\\x[a-z0-9]{2}|\\"|\\\\/g, '*');
         }).join('').length + 2;

        return rawStringLength - escapedStringLength;
    },

    part2: function() {
        return 'two';
    }
};
