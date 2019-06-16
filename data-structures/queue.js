class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }
    dequeue() {
        if (this.size === 0) return null;
        let dequeuedNode = this.first;
        if (this.size === 1) this.last = null;
        this.first = dequeuedNode.next;
        dequeuedNode.next = null;
        this.size--;
        return dequeuedNode.val;
    }
}

module.exports = { Node, Queue };
