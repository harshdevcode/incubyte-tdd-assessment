const { Add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(Add('')).toBe(0);
  });
});