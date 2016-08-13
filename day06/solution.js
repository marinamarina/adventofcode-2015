'use strict';
var _ = require('lodash');

var rows = 1000;
var cols = 1000;

function readLine (v) {
    return /(.*) (-?\d+),(-?\d+) through (-?\d+),(-?\d+)/.exec(v).map(function(n, i) {
        return (i > 1) ? parseInt(n) : n;
    });
}

function turnOnLight (points, i) {
    points[i] = 1;
}

function turnOffLight (points, i) {
    points[i] = 0;
}

function toggleLight (points, i) {
    if (points[i] === 0) {
        points[i] = 1;
    } else {
        points[i] = 0;
    }
}

function increaseBrightness (points, i) {
    points[i] += 1;
}

function decreaseBrightness (points, i) {
    if (points[i] > 0) {
        points[i] -= 1;
    }
}

function toggleBrightness (points, i) {
    points[i] += 2;
}

function readInstructions(functions, input) {
    var points = _.fill(Array(rows * cols), 0);
    _.map(input, function (v) {
        var line = readLine(v);
        console.log("Instruction: " + line[1])

        for (var x = line[2]; x <= line[4]; x++) {
            for (var y = line[3]; y <= line[5]; y++) {
                var index = x + 1000 * y;
                switch (line[1]) {
                    case 'turn on':
                        functions.on(points, index);
                        break;
                    case 'turn off':
                        functions.off(points, index)
                        break;
                    case 'toggle':
                        functions.toggle(points, index)
                        break;
                }
            }
        }
    });
    return points;
}

module.exports = {
    part1 : function(input) {
        // answer: 543903
        var transformedInput = input.split('\n');

        var points = readInstructions({on: turnOnLight, off: turnOffLight, toggle: toggleLight}, transformedInput);
        return _(points).compact().size();
    },
    part2 : function(input) {
        // answer: 14687245
        var transformedInput = input.split('\n');
        var points = readInstructions({on: increaseBrightness, off: decreaseBrightness, toggle: toggleBrightness}, transformedInput);

        return _.reduce(points, function(sum, v) {
            return sum + v;
        });
    }
};
