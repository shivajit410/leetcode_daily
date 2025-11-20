// Problem: https://leetcode.com/problems/set-intersection-size-at-least-two/description/
// Solution: https://leetcode.com/problems/set-intersection-size-at-least-two/submissions/1834944988/

// Intuition - Sort the array wrt higher element ASC, if higher element is same, sort lower element DESC
// [[7,11], [4,11]] -> if you get array like this
// Consider [7,11] first it will include the correct result for any other smaller range elements
// Ending in 11. So [4,11] will also be included and that will go in +0 case
// Case +2 -> add 2 to the result. update p1, p2 with new range elements, i.e., end - 1 & end
// Case +1 -> add 1 to the result, update p1 -> p2 and p2 -> end

var intersectionSizeTwo = function(intervals) {

    intervals.sort((a,b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })

    let p1 = -1;
    let p2 = -1;
    let arrResult = [];

    for (const [start, end] of intervals) {

        if (p1 < start && start <= p2) {
            // +1 Case
            arrResult.push(end);
            p1 = p2;
            p2 = end;
        } else if (start > p2) {
            // +2 Case
            arrResult.push(end-1, end);
            p1 = end-1;
            p2 = end;
        }
        // +0 Case not needed

    }
    return arrResult.length;

};


const intervals1 = [[1,3],[3,7],[8,9]];
const intervals2 = [[1,3],[1,4],[2,5],[3,5]];
const intervals3 = [[1,2],[2,3],[2,4],[4,5]];
const intervals4 = [[2,10],[3,7],[3,15],[4,11],[6,12],[6,16],[7,8],[7,11],[7,15],[11,12]];
console.log(intersectionSizeTwo(intervals1));
console.log(intersectionSizeTwo(intervals2));
console.log(intersectionSizeTwo(intervals3));
console.log(intersectionSizeTwo(intervals4));