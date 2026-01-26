// Problem: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
// Solution: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/submissions/1896266504/

const minimumDifference = (nums, k) => {

    if (k === 1) {
        return 0;
    }
    nums.sort((a,b) => a - b);

    let result = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        result = Math.min(result, Math.abs(nums[i] - nums[i+k-1]));
    }

    return result;

};

// Testcase:
const tests = [
    {nums: [90], k: 1},
    {nums: [9,4,1,7], k: 2},
    {nums: [10,100,300,200,1000,20,30], k: 3}
];

tests.forEach(({nums, k}) => console.log(minimumDifference(nums, k)));