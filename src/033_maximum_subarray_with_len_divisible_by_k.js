// Problem: https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/description
// Solution: https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/submissions/1840963001

const maxSubarraySum = (nums, k) => {
    let prefixSum = 0;
    let subMax = -Infinity;

    const minSoFar = new Array(k).fill(Infinity);
    minSoFar[(k - 1) % k] = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        subMax = Math.max(subMax, prefixSum - minSoFar[i % k]);
        minSoFar[i % k] = Math.min(minSoFar[i % k], prefixSum)
    }

    return subMax;
}

// Testcase
const nums = [-5,1,2,-3,4];
const k = 2;
console.log(maxSubarraySum(nums,k));