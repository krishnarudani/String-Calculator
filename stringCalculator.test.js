const { add } = require('./stringCalculator.js');

test('empty string should return 0', () => {
    expect(add("")).toBe(0);
});

test('two numbers separated by comma should return their sum', () => {
    expect(add("1,5")).toBe(6);
});