const { add } = require('./stringCalculator.js');

test('empty string should return 0 and should handle new lines between numbers', () => {
    expect(add("")).toBe(0);
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40")).toBe(100);
    expect(add("1\n2,3")).toBe(6);
    expect(add("1,2\n3")).toBe(6);
});

