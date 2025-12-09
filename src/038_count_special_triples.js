// Problem: https://leetcode.com/problems/count-special-triplets/description/
// Solution: https://leetcode.com/problems/count-special-triplets/submissions/1850718483/

const specialTriplets = function(nums) {

    const MOD = 1e9 + 7;
    const prefixMap = new Map();
    const suffixMap = new Map();

    for (const num of nums) {
        suffixMap.set(num, (suffixMap.get(num) || 0) + 1);
    }

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        suffixMap.set(nums[i], suffixMap.get(nums[i]) - 1);

        let target = nums[i] * 2;

        let left = prefixMap.get(target) || 0;
        let right = suffixMap.get(target) || 0;

        result = (result + left * right) % MOD;

        prefixMap.set(nums[i], (prefixMap.get(nums[i]) || 0) + 1);
    }

    return result;

};

// Testcase:
const nums = [8,4,2,8,4];
console.log(specialTriplets(nums))