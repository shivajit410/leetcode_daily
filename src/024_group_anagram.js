// Problem: https://leetcode.com/problems/group-anagrams/description/
// Solution: https://leetcode.com/problems/group-anagrams/submissions/1833002611/

const groupAnagram = (strs) => {

    const myMap = new Map();

    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('');
        if (myMap.has(key)) {
            let value = myMap.get(key);
            value.push(strs[i]);
            myMap.set(key, value);
        } else {
            myMap.set(key, [strs[i]])
        }
    }
    return Array.from(myMap.values());

}

// Testcase
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagram(strs));