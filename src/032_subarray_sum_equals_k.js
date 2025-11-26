// Problem: https://leetcode.com/problems/subarray-sum-equals-k/description
// Solution: https://leetcode.com/problems/subarray-sum-equals-k/submissions/1840114823

// Intuition - We need prefix sum method for this
// In general sum(i, j) = sum(0, j) - sum(0, i-1)
// Also since it is specified that we need subarray sum to be k
// We can modify it like sum(0, j) - sum(0, i-1) = k
// Thus getting a setup like sum(0, j) - k = sum(0, i-1)
// Creating a hashMap that tracks the count of occurrence
// Check for prefixSum - k in the hashmap, if found increase the result
// Else increase the occurrence of prefixSum in hashmap

const subarraySum = (nums, k) => {
    let prefixSum = 0;
    let result = 0;
    let myMap = new Map();
    myMap.set(0, 1);

    for (const num of nums) {
        prefixSum += num;
        if (myMap.has(prefixSum - k)) {
            result += myMap.get(prefixSum - k);
        }
        if (myMap.get(prefixSum)) {
            myMap.set(prefixSum, (myMap.get(prefixSum) + 1))
        } else {
            myMap.set(prefixSum, 1)
        }
    }
    return result;
}

// Testcase
const nums1 = [1,1,1];
const k1 = 2;
console.log(subarraySum(nums1, k1));

const nums2 = [3, 4, 7, -2, 2, 1, 4, 2];
const k2 = 7;
console.log(subarraySum(nums2, k2));

const nums3 = [2, 3, -5, 5, -5, 1, 4];
const k3 = 5;
console.log(subarraySum(nums3, k3));