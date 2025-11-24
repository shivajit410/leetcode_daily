// Problem: https://leetcode.com/problems/binary-prefix-divisible-by-5/description/
// Solution: https://leetcode.com/problems/binary-prefix-divisible-by-5/submissions/1838456395/

// Intuition -> The formula to find new number is 
// 2 * currentNum + nextNum
// To handle big numbers instead of bigInt, do modulo by 5
const prefixDivBy5 = (nums) => {
    let N = nums.length;
    let result = [];
    let cur = nums[0];
    result.push(cur%5 === 0)

    for (let i = 1; i < N; i++) {
        cur = (2 * cur + nums[i]) % 5;
        result.push(cur%5 === 0)
    }
    return result;
}

// Bit Manipulation method

const prefixDivBy5BM = (nums) => {
    let N = nums.length;
    let result = [];
    let bin = 0;
    nums.forEach(x => {
        bin = (bin << 1) + x;
        bin %= 5;
        result.push(bin === 0)
    });
    return result
}

// Testcase:

let nums = [1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1];
console.log(prefixDivBy5(nums))
console.log(prefixDivBy5BM(nums))
// console.log(JSON.stringify(prefixDivBy5(nums)) === JSON.stringify(prefixDivBy5BM(nums)))