// Problem: https://leetcode.com/problems/minimum-absolute-difference/description/
// Solution: https://leetcode.com/problems/minimum-absolute-difference/submissions/1897122575/

const minimumAbsDifference = (arr) => {

    arr.sort((a,b) => a - b);

    let result = [];
    let minDiff = Infinity;

    for (let i = 1; i < arr.length; i++) {

        let diff = Math.abs(arr[i] - arr[i-1]);

        if (diff < minDiff) {
            minDiff = diff;
            result = [[arr[i-1], arr[i]]];
        } else if (diff === minDiff){
            result.push([arr[i-1], arr[i]]);
        }

    }

    return result;

};

// Testcase:
const tests = [
    [4,2,1,3],
    [1,3,6,10,15],
    [3,8,-10,23,19,-4,-14,27]
];

tests.forEach((num) => console.log(minimumAbsDifference(num)));