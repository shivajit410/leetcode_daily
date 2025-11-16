// Problem: https://leetcode.com/problems/ransom-notedescription/
// Solution: https://leetcode.com/problems/ransom-note/submissions/1830798548/

var canConstruct = function(ransomNote, magazine) {
    let myMap = new Map()
    for (let i = 0; i < magazine.length; i++) {
        if (myMap.has(magazine[i])) {
            myMap.set(magazine[i], myMap.get(magazine[i])+1)
        } else {
            myMap.set(magazine[i], 1)
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (myMap.has(ransomNote[i])) {
            myMap.set(ransomNote[i], myMap.get(ransomNote[i])-1)
        } else {
            return false;
        }
    }

    for (const value of myMap.values()) {
        if (value < 0) {
            return false;
        }
    }

    return true;
    
};

// Testcase
const ransomNote = 'aa';
const magazine = 'aab';
console.log(canConstruct(ransomNote, magazine));
