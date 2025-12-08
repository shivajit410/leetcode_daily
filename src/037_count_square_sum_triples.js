// Problem: https://leetcode.com/problems/count-square-sum-triples/description
// Solution: https://leetcode.com/problems/count-square-sum-triples/submissions/1849875585

var countTriples = function(n) {
    let count = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a+1; b <= n; b++) {
            let c = Math.sqrt(a*a + b*b)
            if (Number.isInteger(c) && c <= n) {
                count += 2;
            }
        }
    }
    return count;
};

console.log(countTriples(5))
console.log(countTriples(250))