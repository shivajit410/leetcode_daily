// Problem: https://leetcode.com/problems/middle-of-the-linked-list/description
// Solution: https://leetcode.com/problems/middle-of-the-linked-list/submissions/1829309155

// Alogrithm Name - Floyd's Algorithm
// Use 2 pointers -> slow and fast pointer

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  let output = '';
  let current = head;
  while (current) {
    output += `${current.val} -> `;
    current = current.next;
  }
  output += 'null';
  console.log(output);
}




// TestCase
const head1 = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(head1);
let middle = middleNode(head1);
console.log("Middle Node Value:", middle.val); // Expected: 3


const head2 = createLinkedList([1, 2, 3, 4, 5, 6]);
printLinkedList(head2);
middle = middleNode(head2);
console.log("Middle Node Value:", middle.val); // Expected: 4

