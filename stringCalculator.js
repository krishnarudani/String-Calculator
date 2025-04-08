
function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const nums = numbers.replace(/\n/g, ',').split(",");
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add("")); // Returns 0
console.log(add("1")); // Returns 1
console.log(add("1,5")); // Returns 6
console.log(add("1,2,3,4,5")); // Returns 15
console.log(add("10,20,30,40")); // Returns 100
console.log(add("1\n2,3")); // Returns 6
console.log(add("1\n2\n3")); // Returns 6
module.exports = { add };

