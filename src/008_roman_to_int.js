// Problem: https://leetcode.com/problems/roman-to-integer/description
// Solution: https://leetcode.com/problems/roman-to-integer/submissions/1819386701

const romanToInt = (s) => {
    const myMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = myMap.get(s[i]);
        const next = myMap.get(s[i+1]);
        if (next > curr) {
            result -= curr;
        } else {
            result += curr;
        }
    }

    return result;
}

// Testcase
const s = 'MMMXLV';
console.log(romanToInt(s));