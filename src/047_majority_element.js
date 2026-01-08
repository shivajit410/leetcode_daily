// Problem: https://leetcode.com/problems/majority-element/description/
// Solution: https://leetcode.com/problems/majority-element/submissions/1878812094/

// Intuition -> Moore's Voting Algorithm
// It states that since the majority element occurs more than N/2 times
// If we keep a track of frequency of all the elements v/s highest element
// it will still be less than the majority element

const majorityElement = (nums) => {
    let freq = 0;
    let result = 0;

    for (const num of nums) {
        if (freq === 0) {
            result = num;
        }
        if (num === result) {
            freq++;
        } else {
            freq--;
        }
    }

    return result;

}

// TestCase:
const tests = [
    [3,2,3],
    [2,2,1,1,1,2,2],
    [42,102238270,102238270,42,102238270,42,102238270,42,42,42,42,42,42,102238270,102238270,102238270,42,102238270,102238270,42],
];

tests.forEach(arr => {
    console.log(majorityElement(arr));
});