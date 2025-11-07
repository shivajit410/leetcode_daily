// Problem: https://leetcode.com/problems/valid-palindrome/description
// Solution: https://leetcode.com/problems/valid-palindrome/submissions/1822125431

const validPalindrome = (s) => {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        let charCode = char.charCodeAt(0);
        if (
            (charCode >= 97 && charCode <= 122) ||  // ASCII for a to z
            (charCode >= 48 && charCode <= 57)      // ASCII for 0 to 9
        ) {
            result += char;
        }
    }

    return result === result.split('').reverse().join('');
}

const s = 'A man, a plan, a canal: Panama';
console.log(validPalindrome(s))