'use strict';
var fs = require('fs');
var path = require('path');

function getSolution (day, part) {
    var solution = require(path.join(__dirname, `../day0${day}/solution`));
    var input = fs.readFileSync(path.join(__dirname, `../day0${day}/input.txt`), 'utf8').trimRight().split('\n');

    return solution[`part${part}`](input);
};

module.exports = getSolution;
