// Problem: https://leetcode.com/problems/maximum-subarray/description

// Use Kadane'S Algorithm

const maxSubarraySum = (nums) => {

    let result = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        maxSum = Math.max(nums[i], nums[i] + maxSum);
        result = Math.max(result, maxSum);
    }

    return result;

}


// TestCase

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarraySum(nums))