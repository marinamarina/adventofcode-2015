var _ = require('lodash'),
    fs = require('fs');

var initPoint = [0, 0];
var input = fs.readFileSync('input.txt', 'utf8').trim().split('');

module.exports = {
    one : function() {
        var point = [0,0];
        return _(input).map(function(v) {
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
    two : function() {
        var bothSantas = [],
            set = ['[0,0]'];

        bothSantas.push(
            _.filter(input, function(v, i) {
                return i % 2 === 0;
            })
        );
        bothSantas.push(
            _.filter(input, function(v, i) {
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
