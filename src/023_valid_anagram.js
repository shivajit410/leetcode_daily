// Problem: https://leetcode.com/problems/valid-anagram/description
// Solution: https://leetcode.com/problems/valid-anagram/submissions/1832902314

var isAnagram = function(s, t) {

    const myMap = new Map();

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (myMap.has(s[i])) {
            myMap.set(s[i], (myMap.get(s[i]) + 1));
        } else {
            myMap.set(s[i], 1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (myMap.has(t[j])) {
            myMap.set(t[j],(myMap.get(t[j]) - 1));
            if (myMap.get(t[j]) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;

};

var isAnagram1 = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    return true;
}

// Testcase
const s = 'anagram';
const t = 'nagaram';
console.log(isAnagram(s,t));
console.log(isAnagram1(s,t));