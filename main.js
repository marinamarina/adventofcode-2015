'use strict';
var os = require('os');
var fs = require('fs');

function getSolution (day, part) {
    var solution = require(`./day0${day}/solution`);
    var input = fs.readFileSync(`./day0${day}/input.txt`, 'utf8').trimRight().split('\n');

    return solution[`part${part}`](input);
};

module.exports = getSolution;
