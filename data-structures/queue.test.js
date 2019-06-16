const { Node, Queue } = require('./queue.js');

test('Queue constructs with a size of 0 and first and last of null', () => {
    let testQueue = new Queue()
    expect(testQueue).toEqual({size: 0, first: null, last: null});
  });

test('Enqueueing to an empty Queue sets first and last propery to newly created node, set size property to 1, returns size.', () => {
let testQueue = new Queue()
expect(testQueue.enqueue('one')).toEqual(1);
expect(testQueue.first).toBeInstanceOf(Node);
expect(testQueue.first).toEqual(testQueue.last);
expect(testQueue.first.val).toEqual('one');
expect(testQueue.size).toEqual(1);
});

test('Enqueueing to a non-empty Queue sets last property to newly created node, increments size by 1, returns size.', () => {
    let testQueue = new Queue()
    testQueue.enqueue('one');
    expect(testQueue.enqueue('two')).toEqual(2);
    expect(testQueue.first.val).toEqual('one')
    expect(testQueue.last.val).toEqual('two');
    expect(testQueue.size).toEqual(2);

    expect(testQueue.enqueue('three')).toEqual(3);
    expect(testQueue.last.val).toEqual('three');
    expect(testQueue.size).toEqual(3);

    expect(testQueue.first.val).toEqual('one');
  });

test('Dequeueing from an empty Queue returns null.', () => {
let testQueue = new Queue()
expect(testQueue.dequeue()).toEqual(null);
});

test('Dequeueing from a Queue with 1 element sets first and last properties to null, returns value of removed node.', () => {
let testQueue = new Queue()
testQueue.enqueue('one');
expect(testQueue.dequeue()).toEqual('one');
expect(testQueue.first).toEqual(null);
expect(testQueue.last).toEqual(null);
expect(testQueue.size).toEqual(0);
});

test('Dequeueing from Queue with 2 elements sets first and last equal to same node, reduce size property to 1, returns value of remove node.', () => {
    let testQueue = new Queue()
    testQueue.enqueue('one');
    testQueue.enqueue('two');
    expect(testQueue.dequeue()).toEqual('one');
    expect(testQueue.first).toEqual(testQueue.last);
    expect(testQueue.size).toEqual(1);
})

test('Dequeueing from a Queue with multipple elements sets first property to next node, decreses size by 1, returns value of removed node.', () => {
    let testQueue = new Queue()
    testQueue.enqueue('one');
    testQueue.enqueue('two');
    testQueue.enqueue('three');
    testQueue.enqueue('four');
    testQueue.enqueue('five');
    expect(testQueue.dequeue()).toEqual('one');
    expect(testQueue.size).toEqual(4);
    expect(testQueue.dequeue()).toEqual('two');
    expect(testQueue.size).toEqual(3);
    expect(testQueue.first.val).toEqual('three');
    expect(testQueue.last.val).toEqual('five');
});
