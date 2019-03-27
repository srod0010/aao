// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(front = null, back = null, length = 0) {
        this.front = front;
        this.back = back;
        this.length = length;
    }
}

exports.Node = Node;
exports.Queue = Queue;