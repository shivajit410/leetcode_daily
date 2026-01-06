// Problem: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/
// Solution: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/1876401743/

// Intuition -> Implement BFS to calculate the level sum

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const maxLevelSum = (root) => {

    if (root === null) {
        return 0;
    }

    const queue = [];
    queue.push(root);

    let level = 1;
    let maxLevel = 1;
    let maxSum = -Infinity;

    while (queue.length > 0) {
        const size = queue.length;
        let levelSum = 0;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            levelSum += node.val;

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = level;
        }

        level++;
    }

    return maxLevel;
}



const buildTree = (arr) => {
    if (!arr.length || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        const node = queue.shift();

        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        if (arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// TestCase:

const tests = [
  [1,7,0,7,-8,null,null],
  [989,null,10250,98693,-89388,null,null,null,-32127],
  [-100,-200,-300,-20,-5,-10,null],
  [1,1,0,7,-8,-7,9],
];

tests.forEach(arr => {
  const root = buildTree(arr);
  console.log(maxLevelSum(root));
});