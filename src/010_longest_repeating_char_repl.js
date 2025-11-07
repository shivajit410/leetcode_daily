// Problem: https://leetcode.com/problems/longest-repeating-character-replacement
// Solution: https://leetcode.com/problems/longest-repeating-character-replacement/submissions/1821293133

var charReplacement = (s, k) => {
    const freqObj = {};
    let i = 0;
    let result = 0;
    let maxFreq = 0;

    for (let j = 0; j < s.length; j++) {
        freqObj[s[j]] = (freqObj[s[j]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqObj[s[j]])

        while ((j - i + 1) - maxFreq > k) {
            freqObj[s[i]] -= 1;
            i++;
        }
        result = Math.max(result, j - i + 1);
    }
    return result;
}

// Testcase
const s = 'AABABBA';
const k = 1;
console.log(charReplacement(s,k))