// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        // Check for empty list
        if (!this.head) return 'List is empty';
        
        let currentNode = this.head;
        let oldTail = currentNode;
        
        // If list only has one item "reset" list
        if (currentNode === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        } else {
            // Traverse list until node.next is the tail
            while (currentNode.next !== this.tail) {
                currentNode = currentNode.next;
            }
            // Save tail node for return statement
            oldTail = currentNode.next;
            // Remove reference to node.next from currentNode and set currentNode as tail
            currentNode.next = null;
            this.tail = currentNode;
            this.length--;
        }
        return oldTail;
    }
    shift() {
        if (!this.head) return 'List is empty';
        let oldHead = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        } else {
            this.head = this.head.next;
            this.length--;
        }
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode= currentNode.next;
        }
        return currentNode;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        } else if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            let newNode = new Node(val);
            let foundNode = this.get(index - 1);
            newNode.next = foundNode.next;
            foundNode.next = newNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        let prevNode = this.get(index - 1);
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let prev = null;
        let next;
        while (currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

module.exports = { Node, SinglyLinkedList };
    
// let l = new SinglyLinkedList()
// l.push('Hello')
// l.push('World')
// l.push('!')
// l.push(':)')
// l.push('<3')