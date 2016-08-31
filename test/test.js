var assert = require('assert');
var solution = require('../utils/getSolution');

describe('Advent of code', () => {
  it('Day 1. part1: 232, part2: 1783', () => {
    assert.equal(solution(1,1), 232);
    assert.equal(solution(1,2), 1783);
  });

  it('Day 2. part1: 1588178, part2: 3783758', () => {
    assert.equal(solution(2,1), 1588178);
    assert.equal(solution(2,2), 3783758);
  });

  it('Day 3. part1: 2572, part2: 2631', () => {
    assert.equal(solution(3,1), 2572);
    assert.equal(solution(3,2), 2631);
  });

  it('Day 5. part1: 258, part2: 53', () => {
    assert.equal(solution(5,1), 258);
    assert.equal(solution(5,2), 53);
  });

  it('Day 6. part1: 543903, part2: 14687245', () => {
    assert.equal(solution(6,1), 543903);
    assert.equal(solution(6,2), 14687245);
  });

  it('Day 8. part1: 1342, part2: 2074', () => {
    assert.equal(solution(8,1), 1342);
    assert.equal(solution(8,2), 2074);
  });

  it('Day 9. part1: 251km, part2: 898km', () => {
      assert.equal(solution(9,1), 251);
      assert.equal(solution(9,2), 898);
  });

});
