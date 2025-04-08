const { add } = require('./stringCalculator.js');

test('String Calculator', () => {
    expect(add("")).toBe(0); //empty string should return 0
    expect(add("1,2,3,4,5")).toBe(15); //1+2+3+4+5 = 15
    expect(add("10,20,30,40")).toBe(100); //10+20+30+40 = 100
    expect(add("1\n2,3")).toBe(6); //1+2+3 = 6
    expect(add("1,2\n3")).toBe(6); //1+2+3 = 6
    expect(() => {
        add("-1,2");
    }).toThrow("negative numbers not allowed -1"); //negative number should throw an error
    expect(() => {
        add("2,-4,3,-5");
    }).toThrow("negative numbers not allowed -4,-5"); //negative numbers should throw an error
});

