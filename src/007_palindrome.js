// Problem: https://leetcode.com/problems/palindrome-number/description
// Solution: https://leetcode.com/problems/palindrome-number/submissions/1818675830

const palindrome = (x) => {
    let rev = 0;
    let original = x;
    while (x > 0) {
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x/10)
    }
    return original === rev;
}

// Alternate method
const palindrome2 = (x) => {
    return x == x.toString().split('').reverse().join('') ? true : false
}

// Testcase
const x = 121;
console.log(palindrome(x))
console.log(palindrome2(x))