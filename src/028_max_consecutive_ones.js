// Problem: https://leetcode.com/problems/max-consecutive-ones/description
// Solution: https://leetcode.com/problems/max-consecutive-ones/submissions/1834088911

const maxOnes = (nums) => {
    let count = 0;
    let max = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 1) {
    //         count++;
    //     } else {
    //         count = 0;
    //     }
    //     max = Math.max(count, max);
    // }
    for (const n of nums) {
        count = 1 === n ? count+1 : 0;
        max = Math.max(count, max)
    }
    return max;
}

// Testcase
const nums = [1,1,0,1,1,1];
console.log(maxOnes(nums))