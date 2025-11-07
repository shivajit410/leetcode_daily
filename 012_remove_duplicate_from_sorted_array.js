// Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description

// Note: 'Sorted' Array, Use In-place (mentioned in Problem)
// Since it is sorted array, the first element will always be in right position,
// Hence start for loop with index 1.
// Based on this you can consider to avoid while condition!!

const removeDuplicate = (nums) => {

    let left = 0;
    for (let right = 1; right < nums.length; right++) {

        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }

    }

    return left+1;

}

// Testcase:
const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicate(nums))
