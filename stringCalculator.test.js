const { Add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(Add('')).toBe(0);
  });

  test('returns number for single value', () => {
    expect(Add('1')).toBe(1);
  });

  test('returns sum for two comma-separated numbers', () => {
    expect(Add('1,2')).toBe(3);
  });
});