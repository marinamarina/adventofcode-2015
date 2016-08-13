'use strict';
var _ = require('lodash');

var vowels = 'aeiou';
var disallowedValues = ['ab', 'cd', 'pq', 'xy'];

function isNice1(string) {
    return /([aeiou].{0,}){3}/.test(string);
}

function isNice2(string) {
    return /([a-z])\1/.test(string);
}

function isNice3(string) {
    return !_.includes(_.map(disallowedValues, function(k) {
            return _.includes(string, k);
    }), true);
}

function isNice4(string) {
    return /([a-z]{2}).{0,}\1/.test(string);
}

function isNice5(string) {
    return /([a-z]).\1/.test(string);
}

module.exports = {
    part1 : function(input) {
        var transformedInput = input.split('\n');

        return _.size(
            _.compact(
                _.map(transformedInput, function(v) {
                    return isNice1(v) && isNice2(v) && isNice3(v);
                })
            )
        );
    },
    part2 : function(input) {
        var transformedInput = input.split('\n');

        return _.size(
            _.compact(
                _.map(transformedInput, function(v) {
                    return isNice4(v) && isNice5(v);
                })
            )
        );
    }
};
