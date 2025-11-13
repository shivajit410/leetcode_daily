// Problem: https://leetcode.com/problems/container-with-most-water/description
// Solution: https://leetcode.com/problems/container-with-most-water/submissions/1827701261


// Intuition - Dont get this confused with Rain Water Trapping
// This is not concerned about how much water is actually trapped
// But if there are two walls, how much water can be actually stored in between them
// So ignore the buildings in between (i,j)
// That way this becomes a mere geometry of finding area = l * h

var maxArea = (height) => {

    if (!height || height.length === 0) {
        return 0
    }

    let left = 0;
    let right = height.length - 1;
    let result = 0;

    while (left <= right) {

        let w = right - left;
        let h = Math.min(height[left], height[right]);
        let totalArea = w * h;
        result = Math.max(result, totalArea);

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }

    }

    return result;

}

// TestCase
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));