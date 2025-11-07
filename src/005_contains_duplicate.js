// Problem: https://leetcode.com/problems/contains-duplicate-ii/description
// Solution: https://leetcode.com/problems/contains-duplicate-ii/submissions/1816523492

const containsDuplicate = (nums, k) => {

    let mySet = new Set(nums);
    if (mySet.size === nums.length) {
        return false;
    }

    const myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (myMap.has(nums[i])) {
            if ((Math.abs(myMap.get(nums[i]) - i)) <= k) {
                return true;
            }
        }
        myMap.set(nums[i], i);
    }
    return false;

}

// Testcase
const nums = [1,2,3,1];
const k = 3;
console.log(containsDuplicate(nums,k))