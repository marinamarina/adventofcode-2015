'use strict';
const Combinatorics = require('js-combinatorics');
const _ = require('lodash');

const places = new Set();
const distances = new Map();

let shortestDistance = Number.MAX_SAFE_INTEGER;
let longestDistance = 0;



module.exports = {
    part1: i => {
        for (let line of i) {
    let lineSplitted = line.split(" ");
    let place1 = lineSplitted[0];
    let place2 = lineSplitted[2];
    let distanceBetween = lineSplitted[lineSplitted.length-1];

    // count how many unique places
    places.add(place1);
    places.add(place2);

    // create a key-value pair
    distances.set(`${place1},${place2}`, parseInt(distanceBetween));
    distances.set(`${place2},${place1}`, parseInt(distanceBetween));

};

let cmb = Combinatorics.permutation(Array.from(places), places.size).toArray();

_.map(cmb, function(val, idx) {
    let pair1 = val.slice(0,2);
    let pair2 = val.slice(1,3);

    let d = 0;
    for (let i=0; i<val.length-1; i++) {
        d += distances.get(`${val[i]},${val[i+1]}`);
    }
        if (d < shortestDistance) shortestDistance = d;
        if (d > longestDistance) longestDistance = d;
    return d;

    });
        return shortestDistance;
    },

    part2: i => {
        // destructuring
        const [a, b] = function foo(){
            return ['hello', 'world'];
        }();
        console.log(a, b);
        return longestDistance;
    }
};
