'use strict';
var os = require('os');
var fs = require('fs');

var day = process.argv[2];
var part = process.argv[3];
var solution = require(`./day0${day}/solution`);
var input = fs.readFileSync(`./day0${day}/input.txt`, 'utf8').trim();

console.log( 'Answer: ' + solution[`part${part}`](input) );