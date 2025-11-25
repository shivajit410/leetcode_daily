// Problem: https://leetcode.com/problems/smallest-integer-divisible-by-k/description/
// Solution: https://leetcode.com/problems/smallest-integer-divisible-by-k/submissions/1839145723/

// Intuition - Pigeon Hole principle
// For any number k, if you keep generating remainders, there are 2 possibilites
// Remainder == 0
// Get repeating pattern before reaching == 0
// The loop will run until k only because there are only k possibilites of remainder,
// After that either it is 0 or same number
// If remainder found is 0, then i number of 1s are being formed hence return i
const smallestRepunitDivisibleByK = (k) => {

    if (k % 2 === 0 || k % 5 === 0) return -1;

    let rem = 0;
    for (let i = 1; i <= k; i++) {
        rem = (rem * 10 + 1) % k;
        if (rem === 0) return i;
    }
    return -1;

}

// Testcase
const k1 = 1;
const k2 = 2;
const k3 = 3759;
console.log(smallestRepunitDivisibleByK(k1));
console.log(smallestRepunitDivisibleByK(k2));
console.log(smallestRepunitDivisibleByK(k3));