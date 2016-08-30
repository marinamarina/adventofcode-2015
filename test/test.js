var assert = require('assert');
var solution = require('../utils/getSolution');

describe('Advent of code', function() {
   describe('Day01 solution', function() {
    it('part1: 232, part2: 1783', function() {
      assert.equal(solution(1,1), 232);
      assert.equal(solution(1,2), 1783);
    });
  });

   describe('Day02 solution', function() {
    it('part1: 1588178, part2: 3783758', function() {
      assert.equal(solution(2,1), 1588178);
      assert.equal(solution(2,2), 3783758);
    });
  });

   describe('Day03 solution', function() {
    it('part1: 2572, part2: 2631', function() {
      assert.equal(solution(3,1), 2572);
      assert.equal(solution(3,2), 2631);
    });
  });

   describe('Day04 solution', function() {
    it('part1: 282749, part2: 9962624', function() {
      this.skip();
      assert.equal(solution(4,1), 282749);
      assert.equal(solution(4,2), 9962624);
    });
  });

   describe('Day05 solution', function() {
    it('part1: 258, part2: 53', function() {
      assert.equal(solution(5,1), 258);
      assert.equal(solution(5,2), 53);
    });
  });

 describe('Day06 solution', function() {
    it('part1: 543903, part2: 14687245', function() {
      assert.equal(solution(6,1), 543903);
      assert.equal(solution(6,2), 14687245);
    });
  });

  describe('Day08 solution ', function() {
    it('part1: 1342, part2: 2074', function() {
      assert.equal(solution(8,1), 1342);
      assert.equal(solution(8,2), 2074);
    });
  });

  describe('Day09 solution ', function() {
    it('part1: 251km, part2: 898km', function() {
      assert.equal(solution(9,1), 251);
      assert.equal(solution(9,2), 898);
    });

  });

});
