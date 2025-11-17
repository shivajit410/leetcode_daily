// Problem: https://leetcode.com/problems/remove-element/
// Solution: https://leetcode.com/problems/remove-element/?submissionId=1832243963

var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// Testcase
const nums = [0,1,2,2,3,0,4,2]
const k = 2;
console.log(removeElement(nums, k))