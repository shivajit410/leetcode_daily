// Problem: https://leetcode.com/problems/find-pivot-index/description
// Solution: https://leetcode.com/problems/find-pivot-index/submissions/1833834560

const findPivot = (nums) => {

    let total = nums.reduce((curr, acc) => curr + acc, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i];
        if (leftSum === total) {
            return i;
        }
        total -= nums[i];
    }
    return -1;
}

// Testcase:
const nums = [1, 7, 3, 6, 5, 6];
console.log(findPivot(nums));