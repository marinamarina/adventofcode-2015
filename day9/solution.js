'use strict';
const Combinatorics = require('js-combinatorics');
const _ = require('lodash');

function calculateDistance(i) {
    const places = new Set(),
            distances = new Map();

    let min = Number.MAX_SAFE_INTEGER,
        max = 0;

    for (let l of i) {
        let x = l.split(' ');
        let distance = x[x.length-1];

        // add places to a set
        places.add(x[0]);
        places.add(x[2]);

        // create a key-value pair
        distances.set(`${x[0]},${x[2]}`, parseInt(x[x.length-1]));
        distances.set(`${x[2]},${x[0]}`, parseInt(x[x.length-1]));
    };

    let cmb = Combinatorics.permutation(Array.from(places), places.size).toArray();

    _.map(cmb, function(v, i) {
        let pair1 = _.take(v, 2);
        let pair2 = v.slice(1,3);

        let d = 0;
        for (let i=0; i<v.length-1; i++) {
            d += distances.get(`${v[i]},${v[i+1]}`);
        }
        if (d < min) min = d;
        if (d > max) max = d;
            return d;
    });

    return [min, max];
};

module.exports = {
    part1: i => {
        let [min, ] = calculateDistance(i);
        return min;
    },

    part2: i => {
        let [, max] = calculateDistance(i);
        return max;
    }
};
