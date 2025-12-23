// Problem: https://leetcode.com/problems/two-best-non-overlapping-events/description/
// Solution: https://leetcode.com/problems/two-best-non-overlapping-events/submissions/1863392475/

const maxTwoEvents = function(events) {
    events.sort((a,b) => a[0] - b[0]);
    const endSorted = [...events].sort((a,b) => a[1] - b[1]);
    const N = events.length;

    const maxValueTill = new Array(N).fill(0);
    maxValueTill[0] = endSorted[0][2];

    for (let i = 1; i < N; i++) {
        maxValueTill[i] = Math.max(maxValueTill[i - 1], endSorted[i][2]);
    }

    let result = 0;
    let j = 0;

    for (let i = 0; i < N; i++) {
        const [start, ,value] = events[i];

        while (j < N && endSorted[j][1] < start) {
            j++;
        }
        result = Math.max(result, value);
        if (j > 0) {
            result = Math.max(result, value + maxValueTill[j - 1]);
        }
    }

    return result;
};

// Testcase:

const events = [[1,3,2],[4,5,2],[2,4,3]];
console.log(maxTwoEvents(events))