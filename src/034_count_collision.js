// Problem: https://leetcode.com/problems/count-collisions-on-a-road/description/
// Solution: https://leetcode.com/problems/count-collisions-on-a-road/submissions/1846906199/

// Intuition - As per the question all cars are moving at same speed.
// So, if initially any car that is on the left is moving to left it will not collide
// The same happens to all the cars that are at the left initially, hence the first left set of cars
// The logic follows same principle to the cars on the extreme right moving in right direction
// Finally, we increment count at every 'L' and 'R', as we are expected to increase count by 2
// For 'S' we not incrementing any count, as we are expected to increase count by 1
// The expectation is the count was already incremented at either the 'L' or the 'R'

const countCollisions = (directions) => {

    let N = directions.length;
    let i = 0;
    let j = N - 1;

    while (i < N && directions[i] === 'L') {
        i++;
    }

    while (j >= 0 && directions[j] === 'R') {
        j--;
    }

    let collisionCount = 0;

    while (i <= j) {
        if (directions[i] !== 'S') {
            collisionCount++;
        }
        i++;
    }

    return collisionCount;
}

// Testcases:

const directions1 = "LLSSRRLL";
console.log(countCollisions(directions1));

const directions2 = "RLRSLL";
console.log(countCollisions(directions2));

const directions3 = "RSLRSLLSRS";
console.log(countCollisions(directions3));