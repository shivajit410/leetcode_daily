// Problem: https://leetcode.com/problems/minimum-size-subarray-sum/
// Solution: https://leetcode.com/problems/minimum-size-subarray-sum/submissions/1817668645

// This solution is implemented using Sliding Window
// Will work only if nums[i] is a positive number
// Mentioned in the constraint
// General formula to calculate length of array => r - l + 1
const minSubarrayLen = (target, nums) => {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

// Testcase
const target = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubarrayLen(target, nums))