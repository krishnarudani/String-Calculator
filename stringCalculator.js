function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const nums = numbers.split(",");
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}


console.log(add("")); // Returns 0
console.log(add("1")); // Returns 1
console.log(add("1,5")); // Returns 6
console.log(add("1,2,3,4,5")); // Returns 15


module.exports = { add };

