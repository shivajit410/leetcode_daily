// Problem: https://leetcode.com/problems/3sum-closest/description
// Solution: https://leetcode.com/problems/3sum-closest/submissions/1825228746

var threeSumClosest = (nums, target) => {

    nums = nums.sort((a,b) => a-b);
    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length; i++) {

        let low = i+1;
        let high = nums.length-1;

        while (low < high) {

            let sum = nums[i] + nums[low] + nums[high];
            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum
            }

            if (sum === target) {
                return sum;
            } else if (sum > target) {
                high--;
            } else {
                low++;
            }

        }

    }

    return result;

}

// Testcase
let nums = [-1,2,1,-4];
let target = 1;
console.log(threeSumClosest(nums, target))