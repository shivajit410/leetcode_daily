// Problem: https://leetcode.com/problems/two-sum/description

var twoSum = function(nums, target) {
    const myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];
        if (myMap.has(val)) {
            return [myMap.get(val), i]
        }
        myMap.set(nums[i], i)
    }
    return []
};

// TestCase
const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums, target));