const { Node, SinglyLinkedList } = require('./singlyLinkedList.js');

test('SinglyLinkedList constructs with a length of 0 and head and tail of null', () => {
    let testSiglyLinkedList = new SinglyLinkedList()
    expect(testSiglyLinkedList).toEqual({length: 0, head: null, tail: null});
  });

test('push on an empty list sets head and tail to val and length to 1. Returns SinglyLinkedList', () => {
  let testSinglyLinkedList = new SinglyLinkedList()
  testSinglyLinkedList.push('one')
  expect(testSinglyLinkedList.length).toEqual(1);
  expect(testSinglyLinkedList.head).toBeInstanceOf(Node);
  expect(testSinglyLinkedList.head.val).toEqual('one');
  expect(testSinglyLinkedList.tail.val).toEqual('one');
});


