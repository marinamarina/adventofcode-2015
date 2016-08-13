'use strict';
var _ = require('lodash'),
    fs = require('fs');

var rows = 1000;
var cols = 1000;
var input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

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

function readInstructions(functions) {
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
    one : function() {
        // answer: 543903
        var points = readInstructions({on: turnOnLight, off: turnOffLight, toggle: toggleLight});
        return _(points).compact().size();
    },
    two : function() {
        // answer: 14687245
        var points = readInstructions({on: increaseBrightness, off: decreaseBrightness, toggle: toggleBrightness});

        return _.reduce(points, function(sum, v) {
            return sum + v;
        });
    }
};
