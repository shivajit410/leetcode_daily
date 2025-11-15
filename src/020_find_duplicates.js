// Problem: https://leetcode.com/problems/find-the-duplicate-number/
// Solution: https://leetcode.com/problems/find-the-duplicate-number/submissions/1830585836/

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
    
};

// Testcase
const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
