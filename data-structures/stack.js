class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    push(val) {
        let newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }
    pop() {
        if (this.size === 0) return null;
        let poppedNode = this.first;
        if (this.first === this.last) this.last = null;
        this.first = poppedNode.next;
        poppedNode.next = null;
        this.size--;
        return poppedNode.val;
    }
}

module.exports = { Node, Stack };
