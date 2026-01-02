// Problem: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/
// Solution: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/1871742012/

// Intuition -> Pigeon Hole Principle
// It states that, if there are more pigeons than holes
// then you will have to have one or more hole with atleast 2 pigeons
// Context Here -> Based on the scenario provided, 2N elements, N+1 unique elements, 1 element repeated N times
// We can assume that in every 3 elements there has to be an element that is duplicated
// If not, then the last element for sure is duplicated
const repeatedNTimes = (nums) => {
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i+1] || nums[i] === nums[i+2]) {
            return nums[i];
        }
    }
    return nums.at(-1); // Last element
}

const repeatedNTimes1 = (nums) => {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            return nums[i];
        }
        mySet.add(nums[i]);
    }
    return 0; // Fail Safe
}

// Testcases:
const nums1 = [1,2,3,3];
console.log(repeatedNTimes(nums1));
console.log(repeatedNTimes1(nums1));

const nums2 = [2,1,2,5,3,2];
console.log(repeatedNTimes(nums2));
console.log(repeatedNTimes1(nums2));