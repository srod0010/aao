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
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(front = null, back = null, length = 0) {
        this.front = front;
        this.back = back;
        this.length = length;
    }

    enqueue(val){
        const node = new Node(val);
        if (!this.front) {
            this.front = node;
            this.back = node;
        } else {
            let temp = this.back;
            this.back = node;
            temp.next = this.back;
        }

        return ++this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;