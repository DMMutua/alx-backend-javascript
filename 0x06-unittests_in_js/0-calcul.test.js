const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly calculate the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and calculate the sum of an integer and a decimal number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle rounding off and adding negative integers', () => {
    assert.strictEqual(calculateNumber(-2.4, -5.7), -8);
    assert.strictEqual(calculateNumber(0, -2.5), -2);
  });
});
