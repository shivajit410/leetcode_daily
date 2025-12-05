// Problem: https://leetcode.com/problems/count-partitions-with-even-sum-difference/description/
// Solution: https://leetcode.com/problems/count-partitions-with-even-sum-difference/submissions/1847249103/

// Intuition - (For second approach)
// Let S = total sum of the array
// left = sum(nums[0...i])
// right = sum(nums[i+1...N-1]) = S - left
// diff = left - right = left - (S - left) = 2left - S
// For difference to be odd, it will always depend on S, because 2left will be even
// So we can neglect that, hence we check
// If S is even, every partition from (0, N-2) works, -> N - 1
// If S is odd, no partition makes difference even -> 0

const countParition = (nums) => {

    const N = nums.length;
    const prefixSum = new Array(N).fill(0);
    const suffixSum = new Array(N).fill(0);

    prefixSum[0] = nums[0];
    for (let i = 1; i < N; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }

    suffixSum[N-1] = nums[N-1];
    for (let i = N-2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i+1] + nums[i];
    }

    let count = 0;
    for (let i = 0; i < N; i++) {
        const diff = prefixSum[i] - suffixSum[i+1];
        if (diff % 2 == 0) {
            count++;
        }
    }
    return count;

}

const countParition1 = (nums) => {
    let total = 0;

    for (const x of nums) {
        total += x;
    }

    if (total % 2 !== 0) {
        return 0;
    }
    return nums.length - 1;
}

// Testcase

const nums1 = [10,10,3,7,6];
console.log(countParition(nums1));

const nums2 = [1,2,2];
console.log(countParition(nums2));

const nums3 = [2,4,6,8];
console.log(countParition(nums3));