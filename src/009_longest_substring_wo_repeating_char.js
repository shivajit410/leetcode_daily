// Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/description
// Solution: https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1820564456

const longestSubstring = (s) => {
    if (!s) {
        return 0;
    }

    if (s.length == 1) {
        return 1;
    }

    let start = 0;
    let maxLen = 0;
    const myMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (myMap.has(s[i])) {
            start = Math.max(start, myMap.get(s[i]) + 1);
        }
        myMap.set(s[i], i);
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}

// Testcase
const s = 'abcabcbb';
console.log(longestSubstring(s));