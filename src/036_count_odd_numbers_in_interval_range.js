// Problem: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description
// Solution: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/submissions/1848943042

var countOdds = function(low, high) {

    if ((high - low + 1) % 2 === 0) {
        return (high - low + 1) / 2;
    } else {
        if (low % 2 === 1) {
            return 1 + (high - low) / 2;
        } else {
            return (high - low) / 2;
        }
    }

};

// Testcase
const low = 3;
const high = 7;
console.log(countOdds(low, high))