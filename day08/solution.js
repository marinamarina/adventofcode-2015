'use strict';

module.exports = {
    part1: i => {
        //1342
        let rawStringLength = i.join("").length;
        let escapedStringLength = i.map(
            v => v.replace(/\\x[a-z0-9]{2}|\\"|\\\\/g, '*')
            .replace(/\"/g, "")
            ).join('').length;

        return rawStringLength - escapedStringLength;
    },

    part2: i => {
        let rawStringLength = i.join("").length;
        let encodedStringLength = i.map(
            v => {
                return v.replace(/\\|\"/g, s => {return '\\' + s;});
            }
        ).join('').length + i.length * 2;

        return encodedStringLength - rawStringLength;
    }
};
