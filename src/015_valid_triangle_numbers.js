// Problem: https://leetcode.com/problems/valid-triangle-number
// Solution: https://leetcode.com/problems/valid-triangle-number/submissions/1826064386

// A Triangle is valid only iff
// a <= b <= c and a + b > c
// Longest side should be smaller than sum of 2 small sides

// For a sorted array
// Considering the right most element being largest
// If first element + second last element is bigger than largest
// Then all the elements in between are valid fixing last and second last element
// Hence adding (high - low) to the result
// Check the same for high--
// Else increase the lowest element

const validTriangleNumbers = (nums) => {

    nums = nums.sort((a,b) => a-b);
    let result = 0;

    for (let longest = nums.length-1; longest >= 0; longest--) {

        let low = 0;
        let high = longest-1;

        while (low < high) {

            if (nums[low] + nums[high] > nums[longest]) {
                result += high - low;
                high--;
            } else {
                low++;
            }

        }

    }

    return result;

}

// Testcase
const nums = [2,9,9,2,5,8]
console.log(validTriangleNumbers(nums));