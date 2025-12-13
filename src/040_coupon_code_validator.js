// Problem: https://leetcode.com/problems/coupon-code-validator/description/
// Solution: https://leetcode.com/problems/coupon-code-validator/submissions/1854718901/

const validateCoupons = function(code, businessLine, isActive) {
    const validCouponsCategory = ['electronics', 'grocery', 'pharmacy', 'restaurant'];
    let myObj = {
        electronics: [],
        grocery: [],
        pharmacy: [],
        restaurant: []
    }

    const pattern = /^[a-zA-Z0-9_]+$/;

    for (let i = 0; i < code.length; i++) {
        if (pattern.test(code[i]) && isActive[i] && validCouponsCategory.includes(businessLine[i])) {
            myObj[businessLine[i]].push(code[i])
        }
    }

    const result = [];
    for (const [key, value] of Object.entries(myObj)) {
        value.sort();
        result.push(...value);
    }
    
    return result;
};

// Testcase:
const code = ["SAVE20", "", "PHARMA5", "SAVE@20"];
const businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"];
const isActive = [true, true, true, true];
console.log(validateCoupons(code, businessLine, isActive))