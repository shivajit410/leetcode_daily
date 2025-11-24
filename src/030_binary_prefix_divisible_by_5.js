// Problem: https://leetcode.com/problems/binary-prefix-divisible-by-5/description/
// Solution: https://leetcode.com/problems/binary-prefix-divisible-by-5/submissions/1838456395/

// Intuition -> The formula to find new number is 
// 2 * currentNum + nextNum
// To handle big numbers instead of bigInt, do modulo by 5
const prefixDivBy5 = (nums) => {
    let N = nums.length;
    let cur = nums[0];
    let result = [];
    if (cur % 5 === 0) {
        result.push(true);
    } else {
        result.push(false);
    }

    for (let i = 1; i < N; i++) {
        cur = (2 * cur + nums[i]) % 5;
        if (cur % 5 === 0) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

// Testcase:

let nums = [1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1];
console.log(prefixDivBy5(nums))