// Problem: https://leetcode.com/problems/four-divisors/description/
// Solution: https://leetcode.com/problems/four-divisors/submissions/1874273171/

// Intuition: To calculate divisors, you dont need to go till N,
// but till sq root of N only.

const fourDivisors = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let divisor = [];
        for (let j = 0; j * j <= nums[i]; j++) {
            if (nums[i] % j === 0) {
                divisor.push(j);
                if (j !== nums[i] / j) {
                    divisor.push(nums[i] / j);
                }
            }
            if (divisor.length > 4) {
                break;
            }
        }
        if (divisor.length === 4) {
            const sum = divisor.reduce((sum, curr) => sum + curr, 0);
            result += sum;
        }
    }
    return result;
}


// Testcase:
const nums1 = [21, 4, 7];
console.log(fourDivisors(nums1));

const nums2 = [1, 2, 3, 4, 5];
console.log(fourDivisors(nums2));

const nums3 = [6, 10, 14, 15, 21, 22, 26, 33, 35, 38, 39, 46, 51, 55, 57, 58, 62, 65, 69, 74];
console.log(fourDivisors(nums3));