// Problem: https://leetcode.com/problems/single-number/description/
// Solution: https://leetcode.com/problems/single-number/submissions/1879892890/

// Intuition -> Use Bitwise XOR
// Set result = 0;
// A ^ 0 = A
// A ^ A = 0

const singleNumber = (nums) => {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}

// Testcase:
const tests = [
    [2,2,1],
    [4,1,2,1,2],
    [1]
];

tests.forEach((num) => console.log(singleNumber(num)));