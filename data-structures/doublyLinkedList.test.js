const { Node, DoublyLinkedList } = require('./DoublyLinkedList.js');

test('DoublyLinkedList constructs with a length of 0 and head and tail of null', () => {
    let testDoublyLinkedList = new DoublyLinkedList()
    expect(testDoublyLinkedList).toEqual({length: 0, head: null, tail: null});
  });

test('DoublyLinkedList.push() adds a value to the end of the list and increases length by one', () => {
  let testDoublyLinkedList = new DoublyLinkedList()
  testDoublyLinkedList.push('one')
  expect(testDoublyLinkedList.head).toBeInstanceOf(Node);
  expect(testDoublyLinkedList.head.val).toEqual('one');
  expect(testDoublyLinkedList.tail.val).toEqual('one');
  expect(testDoublyLinkedList.length).toEqual(1);
  
  testDoublyLinkedList.push('two');
  
  expect(testDoublyLinkedList.head.val).toEqual('one');
  expect(testDoublyLinkedList.tail.val).toEqual('two');
  expect(testDoublyLinkedList.length).toEqual(2);
  
  testDoublyLinkedList.push('three');
  
  expect(testDoublyLinkedList.head.next.val).toEqual('two');
  expect(testDoublyLinkedList.tail.val).toEqual('three');
  expect(testDoublyLinkedList.head.prev).toEqual(null)
  expect(testDoublyLinkedList.tail.next).toEqual(null);
});

// Test get(index)
test('DoublyLinkedList constructs with a length of 0 and head and tail of null', () => {
  let testDoublyLinkedList = new DoublyLinkedList()
  testDoublyLinkedList.push('one');
  testDoublyLinkedList.push('two');
  testDoublyLinkedList.push('three');
  testDoublyLinkedList.push('four');
  testDoublyLinkedList.push('five');
  expect(testDoublyLinkedList.get(1)).toBeInstanceOf(Node);
  expect(testDoublyLinkedList.get(1).val).toEqual('two');
  expect(testDoublyLinkedList.get(10)).toEqual(null);
  expect(testDoublyLinkedList.get(-1)).toEqual(null);
});

// Test set(index, val)
test('Set the value of an index in the list', () => {
  let testDoublyLinkedList = new DoublyLinkedList()
  testDoublyLinkedList.push('one');
  testDoublyLinkedList.push('two');
  expect(testDoublyLinkedList.set(1, 'one-half')).toEqual(true);
  expect(testDoublyLinkedList.get(1).val).toEqual('one-half');
  expect(testDoublyLinkedList.set(10)).toEqual(false);
  expect(testDoublyLinkedList.set(-1)).toEqual(false);
});

// Test insert
test('Insert the value at the index in the list', () => {
  let testDoublyLinkedList = new DoublyLinkedList()
  testDoublyLinkedList.insert(0, 'one');
  testDoublyLinkedList.insert(1, 'two');
  testDoublyLinkedList.insert(2, 'three');
  expect(testDoublyLinkedList.tail.val).toEqual('three')
  expect(testDoublyLinkedList.head.val).toEqual('one')
  expect(testDoublyLinkedList.head.next.val).toEqual('two')
  // expect(testDoublyLinkedList.set(1, 'one-half')).toEqual(true);
  // expect(testDoublyLinkedList.get(1).val).toEqual('one-half');
  // expect(testDoublyLinkedList.set(10)).toEqual(false);
  // expect(testDoublyLinkedList.set(-1)).toEqual(false);
});

// Test delete
test('Remove an element from the list at the given index', () => {
  let testDoublyLinkedList = new DoublyLinkedList()
  testDoublyLinkedList.push('one');
  testDoublyLinkedList.push('two');
  testDoublyLinkedList.push('three');
  testDoublyLinkedList.push('four');
  expect(testDoublyLinkedList.remove(-1)).toEqual(undefined);
  expect(testDoublyLinkedList.remove(testDoublyLinkedList.length)).toEqual(undefined);
  expect(testDoublyLinkedList.length).toEqual(4);
  expect(testDoublyLinkedList.remove(1)).toBeInstanceOf(Node);
  expect(testDoublyLinkedList.length).toEqual(3);
  expect(testDoublyLinkedList.remove(testDoublyLinkedList.length - 1)).toBeInstanceOf(Node);
  expect(testDoublyLinkedList.length).toEqual(2);
  expect(testDoublyLinkedList.remove(0)).toBeInstanceOf(Node);
  expect(testDoublyLinkedList.length).toEqual(1);
  
});