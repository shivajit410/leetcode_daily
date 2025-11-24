// Problem: https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/
// Solution: https://leetcode.com/problems/keep-multiplying-found-values-by-two/submissions/1833866805/

const findFinalValue = (nums, original) => {

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === original) {
            original *= 2;
        }
    }
    return original;
}

// Testcase
const nums = [5,3,6,1,12];
const original = 3;
console.log(findFinalValue(nums, original))