// Problem: https://leetcode.com/problems/maximum-matrix-sum/description/
// Solution: https://leetcode.com/problems/maximum-matrix-sum/submissions/1875264330/

// Intuition -> Keep track of Negative numbers,
// Absolute smallest number
// Absolute sum of all numbers in matrix
// If negative number count is even, return the total sum as all negative can be converted to positive
// If negative number count is odd, subtract twice of absolute smallest number, as that will be the only one left

const matrixSum = (matrix) => {
    const N = matrix.length;

    let smallestNum = Infinity;
    let sum = 0;
    let negativeCount = 0;

    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            let curr = matrix[row][col];
            if (curr < 0) {
                negativeCount += 1;
            }
            smallestNum = Math.min(smallestNum, Math.abs(curr));
            sum += Math.abs(curr);
        }
    }

    return negativeCount % 2 === 0 ? sum : sum - 2 * smallestNum;

}


// Testcase:
const matrix1 = [[1,-1],[-1,1]];
console.log(matrixSum(matrix1));

const matrix2 = [[1,2,3],[-1,-2,-3],[1,2,3]];
console.log(matrixSum(matrix2));