'use strict';
var fs = require('fs');
var path = require('path');

function getSolution (day, part) {
    var solution = require(path.join(__dirname, `../day${day}/solution`));
    var input = fs.readFileSync(path.join(__dirname, `../day${day}/input.txt`), 'utf8').trim().split('\n');

    return solution[`part${part}`](input);
};

module.exports = getSolution;
