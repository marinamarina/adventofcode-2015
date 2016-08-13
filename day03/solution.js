'use strict';
var _ = require('lodash');

var initPoint = [0, 0];

module.exports = {
    part1 : function(input) {
        var transformedInput = input.split('');
        var point = [0,0];

        return _(transformedInput).map(function(v) {
                    if (v === '^') {
                        point[1]++;
                    } else if (v === 'v') {
                        point[1]--;
                    } else if (v === '<') {
                        point[0]--;
                    } else if (v === '>') {
                        point[0]++;
                    }
                    return JSON.stringify(_.map(point));
                }).uniq().size();
    },
    part2 : function(input) {
        var transformedInput = input.split('');
        var bothSantas = [],
            set = ['[0,0]'];

        bothSantas.push(
            _.filter(transformedInput, function(v, i) {
                return i % 2 === 0;
            })
        );
        bothSantas.push(
            _.filter(transformedInput, function(v, i) {
                return i % 2 !== 0;
            })
        );

        set = _.flatten(
            _.map(bothSantas, function(santa) {
                var point = [0,0];
                return _.map(santa, function(v) {
                            if (v === '^') {
                                point[1]++;
                            } else if (v === 'v') {
                                point[1]--;
                            } else if (v === '<') {
                                point[0]--;
                            } else if (v === '>') {
                                point[0]++;
                            }
                            return JSON.stringify(_.map(point));
                        });
                    })
                );

        return _.size(_.uniq(set));
    }
};
