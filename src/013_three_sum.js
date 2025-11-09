// Problem: https://leetcode.com/problems/3sum/description
// Solution: https://leetcode.com/problems/3sum/submissions/1824396932

// Code Approach - Extended version of 2Sum
// Need to sort the array first for this approach to work
// Sorting helps reduce the time complexity from N^3 to N^2
// Used 2 Pointer Approach, where low = first element, high = last element
// Since the array is sorted we can work with conditions like 
// Sum found -> add the elements in the result, update pointers
// Sum greater than target, reduce high pointer
// Sum less than target, increase low pointer
// Edge Cases -
// 1. if condition -> to remove the duplicate elements in the start
// 2. While condition -> to remove the duplicates in between
// Need to handle it this way because, in problem it was mentioned that
// No need to add duplicate elements.
// I know i will think that why can't I use set.
// Because, it will still keep the TC to O(N^2), Increases SC
// You can add duplicate objects in a set. to eliminate it you will probably convert
// it to a string and then add, thus increasing the processing overhead!!!


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