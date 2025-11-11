// Problem: https://leetcode.com/problems/trapping-rain-water/description
// Solution: https://leetcode.com/problems/trapping-rain-water/submissions/1826881317


// Intuition: For every building, we need the leftMax and rightMax
// Having that, get the smallest of the two 
// we can get the amount of water that can be trapped above that
// Generating PrefixArray and SuffixArray can get you the leftMax and rightMax
// element at a specific index
// ISSUE: Takes more space complexity
const trappedRainWater = (height) => {

    if (!height || height.length === 0) {
        return 0;
    }

    const N = height.length;
    let prefixMax = new Array(N).fill(0);
    let suffixMax = new Array(N).fill(0);

    prefixMax[0] = height[0];
    for (let i = 1; i < N; i++) {
        prefixMax[i] = Math.max(prefixMax[i-1], height[i]);
    }

    suffixMax[N-1] = height[N-1];
    for (let i = N-2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i+1], height[i]);
    }

    let result = 0;
    for (let i = 0; i < N; i++) {
        result += Math.min(prefixMax[i], suffixMax[i]) - height[i];
    }

    return result;

}

// Intuition: Use 2 Pointer Approach
// Initialise variables leftMax = 0, rightMax = 0, leftPtr = 0, rightPtr = N-1
// Thumb Rule: Always process the small pointer
// We iterate till left <= right
// In every iteration we check
//// if height[left] <= height[right]
////// We process the left pointer
////// Check height[left] > leftMax
////// Update the leftMax, Add leftMax - height[left] to result, increase left
//// Else
////// We process the Right pointer
const trap = (height) => {

    let N = height.length;
    let leftMax = 0, rightMax = 0;
    let left = 0, right = N-1;
    let result = 0;

    while (left <= right) {

        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            }
            result += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            }
            result += rightMax - height[right];
            right--;
        }
    }
    return result;
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trappedRainWater(height));
console.log(trap(height));