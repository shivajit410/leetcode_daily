// Problem: https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/
// Solution: https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/submissions/

var minimumPairRemoval = function(nums) {
    const checkSort = (nums) => {
        let curr = nums[0];
        let flag = false;
        for (let i = 1; i < nums.length; i++) {
            if (curr > nums[i]) {
                flag = true;
            }
            curr = nums[i];
        }
        if (flag) {
            return false;
        }
        return true;
    }

    let result = 0;

    if (checkSort(nums)) {
        return result;
    }

    while(!checkSort(nums)) {
        if (nums.length >= 2) {
            let prefixArray = [];
            for (let i = 0; i < nums.length - 1; i++) {
                prefixArray[i] = nums[i] + nums[i+1];
            }
            let smallIndex = 0;
            let smallValue = prefixArray[0];
            for (let i = 1; i < prefixArray.length; i++) {
                if (smallValue > prefixArray[i]) {
                    smallValue = prefixArray[i];
                    smallIndex = i;
                }
            }
            nums.splice(smallIndex, 2, smallValue);
            result++;
        } else {
            break;
        }
    }

    return result
};