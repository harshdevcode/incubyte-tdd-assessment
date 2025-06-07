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

  test('handles unknown amount of numbers', () => {
    expect(Add('1,2,3,4')).toBe(10);
  });

  test('handles new lines as delimiter', () => {
    expect(Add('1\n2,3')).toBe(6);
  });

  test('handles custom single-character delimiter', () => {
    expect(Add('//;\n1;2')).toBe(3);
  });

   test('throws on negative numbers with all negatives in message', () => {
    expect(() => Add('1,-2,-3')).toThrow('negatives not allowed: -2, -3');
  });

  test('handles delimiters of any length', () => {
    expect(Add('//[***]\n1***2***3')).toBe(6);
  });
});