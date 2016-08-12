var _ = require('lodash'),
    fs = require('fs');

var vowels = 'aeiou';
var disallowedValues = ['ab', 'cd', 'pq', 'xy'];
var input = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

module.exports = {
    input : input,
    foo : function() {
        //var mystring = 'turn on 0,0 through 999,999';
        //return mystring.replace(/,/g , ' ').split(' ');
        // a:A,b:B,c:C,d:D,z:true
        var problem = [{
            a: 'A',
          },
          {
            b: 'B',
          },
          {
            c: 'C',
          },
          {
            d: 'D',
          },
          {
            z: true
          }];
        var arr = [];

         _.forEach(problem, function(n) {
          return _.map(n, function(v, j) {
            arr.push (j + ':' + v)
          })
        });
        return arr;
    }
};
