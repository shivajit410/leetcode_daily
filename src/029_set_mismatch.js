// Problem: https://leetcode.com/problems/set-mismatch/description
// Solution: https://leetcode.com/problems/set-mismatch/submissions/1834234881

const setMismatch = (nums) => {

    let N = nums.length;
    nums.sort((a, b) => a - b);
    let ele = 0;
    let sum = 0;
    for (let i = 0; i < N; i++) {
        if (nums[i] == nums[i+1]) {
            ele = nums[i];
        }
        sum += nums[i]
    }

    sum -= ele;

    let totalSum = N * (N + 1) / 2;

    return [ele, totalSum - sum];
}

// Testcase
const nums = [1,2,2,4];
console.log(setMismatch(nums))