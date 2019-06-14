// piece of data - val
// reference to next node - next
// reference to previous node - prev

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let foundNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = foundNode.prev;
            this.tail.next = null;
            foundNode.prev = null;
        }
        this.length--;
        return foundNode;
    }
    shift() {
        if (!this.head) return undefined;
        let foundNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = foundNode.next;
            this.head.prev = null;
            foundNode.next = null;
        }
        this.length--;
        return foundNode;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode;
        let count ;
        if (index <= this.length / 2) {
            currentNode = this.head;
            count = 0;
            while (count !== index) {
                currentNode = currentNode.next;
                count++;
            }
        } else {
            currentNode = this.tail;
            count = this.length - 1;
            while (count != index) {
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = this.get(index);
        
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        beforeNode.next = newNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        let foundNode = this.get(index)
        
        if (!foundNode) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        
        let beforNode = foundNode.prev;
        let afterNode = foundNode.next;

        foundNode.next = null;
        foundNode.prev = null;
        beforNode.next = afterNode;
        afterNode.prev = beforNode;
        this.length --;
        return foundNode;
    }
}

module.exports = { Node, DoublyLinkedList };

let l = new DoublyLinkedList();
l.push("Hello");
l.push(" World");
l.push(" !");
l.set(1, 'TEST')
console.log("List", l);
console.log("Head", l.head);
console.log("Tail", l.tail);

