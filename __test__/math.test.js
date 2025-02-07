const { sum, mul, sub, div } = require('../src/math');

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2);
});
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1);
});
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(27);
});
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(36);
});
test('Dividing 1/0 equals infinite',()=>{
  expect(div(1, 0)).toBe(Infinity);
});