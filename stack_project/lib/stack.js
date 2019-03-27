// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if (!this.top) {
            this.top = node;
            this.bottom = node;
            
        } else {
            const temp = this.top;
            this.top = node;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) return null;
        if (!this.top.next) {
            // if there is only one node
            let node = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return node.value;
        } else {
            //multiple nodes
            let oldTop = this.top;
            let newTop = this.top.next;
            this.top.next = null;
            this.top = newTop;
            this.length--;
            return oldTop.value;

        }
    }
}

exports.Node = Node;
exports.Stack = Stack;
