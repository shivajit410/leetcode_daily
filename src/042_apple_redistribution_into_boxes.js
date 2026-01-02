// Problem: https://leetcode.com/problems/apple-redistribution-into-boxes/description/
// Solution: https://leetcode.com/problems/apple-redistribution-into-boxes/submissions/1863786188/

const minimumBoxes = (apple, capacity) => {

    capacity.sort((a,b) => b - a);
    let appleSum = apple.reduce((curr, acc) => curr + acc, 0);

    for (let i = 0; i < capacity.length; i++) {
        appleSum -= capacity[i];
        if (appleSum <= 0) {
            return i+1;
        }
    }
    return 0;
}

const apple = [1,3,2];
const capacity = [4,3,1,5,2];
console.log(minimumBoxes(apple, capacity));