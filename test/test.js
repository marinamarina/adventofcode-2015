var assert = require('assert');
var solution = require('../utils/getSolution');

describe('adventofcode', function() {
  describe('Day08 solution ', function() {
    it('part1: 1342, part2: 2074 ', function() {
      assert.equal(solution(8,1), 1342);
      assert.equal(solution(8,2), 2074);
    });

  });
});
