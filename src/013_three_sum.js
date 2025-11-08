// Problem: https://leetcode.com/problems/3sum/description
// Solution: https://leetcode.com/problems/3sum/submissions/1824396932

var threeSum = (nums) => {

    let result = [];

    nums = nums.sort((a,b) => a-b);

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i-1] === nums[i]) {
            continue;
        }

        let low = i+1;
        let high = nums.length - 1;

        while (low < high) {

            let sum = nums[i] + nums[low] + nums[high];

            if (sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;

                while (nums[low-1] === nums[low] && low < high) {
                    low++;
                }

            } else if (sum > 0) {
                high--;
            } else {
                low++
            }

        }
    }

    return result;
}

// Testcase
const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
console.log(threeSum(nums));