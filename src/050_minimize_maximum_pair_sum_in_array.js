// Problem: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/
// Solution: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/submissions/1895468114/


var minPairSum = function(nums) {
    nums.sort((a,b) => a - b);
    let low = 0;
    let high = nums.length - 1;
    let max = 0;
    while (low < high) {
        max = Math.max(max, nums[low] + nums[high]);
        low++;
        high--;
    }
    return max;
};

// Testcase:
const tests = [
    [3,5,2,3],
    [3,5,4,2,4,6],
    [1,100000]
];

tests.forEach((num) => console.log(minPairSum(num)));
