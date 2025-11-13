// Problem: https://leetcode.com/problems/linked-list-cycle/description
// Solution: https://leetcode.com/problems/linked-list-cycle/submissions/1828466772

// Alogrithm Name - Floyd's Algorithm
// Use 2 pointers -> slow and fast pointer

// Code
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};

// Definition for singly-linked list
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// Helper to create a linked list with a cycle
function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        // Keep track of the node where the cycle should start
        if (i === pos) cycleNode = current;
    }

    // Connect tail to the cycle start node if pos >= 0
    if (pos >= 0) {
        current.next = pos === 0 ? head : cycleNode;
    }

    return head;
}

// Helper function to print linked list
function printLinkedListWithCycleInfo(head) {
    const visited = new Map(); // node -> index
    let current = head;
    let index = 0;
    let output = '';

    while (current) {
        if (visited.has(current)) {
            const cycleStartIndex = visited.get(current);
            output += `(${current.val}) [Cycle detected back to node at index ${cycleStartIndex}]`;
            console.log(output);
            return;
        }

        visited.set(current, index);
        output += `${current.val} (index ${index}) -> `;
        current = current.next;
        index++;
    }

    output += 'null';
    console.log(output);
}



// Testcase
const arr = [3, 2, 0, -4, 2];
const pos = 1;  // Indicates at what index the linked list is to be cyclic
const head = createLinkedList(arr, pos);
printLinkedListWithCycleInfo(head);
console.log('hasCycle -> ', hasCycle(head));

const arr1 = [3, 2, 0, -4];
const pos1 = -1;
const head1 = createLinkedList(arr1, pos1);
printLinkedListWithCycleInfo(head1);
console.log('hasCycle -> ', hasCycle(head1));
