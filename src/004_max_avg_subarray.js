// Problem: https://leetcode.com/problems/maximum-average-subarray-i/

const maxAverageSubarray = (nums, k) => {

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let ans = sum;
    let length = nums.length;
    for (let i = k; i < length; i++) {
        sum += nums[i] - nums[i-k];
        ans = Math.max(sum, ans)
    }

    return ans / k;
}

//  Testcase:

const nums = [1,12,-5,-6,50,3];
const k = 4;
console.log(maxAverageSubarray(nums, k))