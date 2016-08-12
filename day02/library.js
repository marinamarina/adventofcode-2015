var _ = require('lodash'),
    fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(function(v) {
        return _.sortBy(_.map(v.split('x'), _.parseInt));
    });

function calculatePaperSquare() {
    var paper = _.reduce(input, function(sum, v) {
        return sum + (3*v[0]*v[1] + 2*v[1]*v[2] + 2*v[0]*v[2]);
    }, 0);

    return paper;
}
function calculateRibbonLength() {
  var paper = _.reduce(input, function(sum, v) {
    return sum + (2*v[0] + 2*v[1] + v[0]*v[1]*v[2]);
  }, 0);
  return paper;
}

module.exports = {
    input : input,
    calculatePaperSquare : calculatePaperSquare,
    calculateRibbonLength : calculateRibbonLength

};
