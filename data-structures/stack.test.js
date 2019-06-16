const { Node, Stack } = require('./stack.js');

test('Stack constructs with a size of 0 and first and last of null', () => {
    let testStack = new Stack()
    expect(testStack).toEqual({size: 0, first: null, last: null});
  });

test('Pushing on to an empty stack sets first and last propery to newly created node, set size property to 1, returns size.', () => {
let testStack = new Stack()
expect(testStack.push('one')).toEqual(1);
expect(testStack.first).toBeInstanceOf(Node);
expect(testStack.first).toEqual(testStack.last);
expect(testStack.first.val).toEqual('one');
expect(testStack.size).toEqual(1);
});

test('Pushing to a non-empty stack sets first property to newly created node, increments size by 1, returns size.', () => {
    let testStack = new Stack()
    testStack.push('one');
    expect(testStack.push('two')).toEqual(2);
    expect(testStack.first.val).toEqual('two');
    expect(testStack.size).toEqual(2);

    expect(testStack.push('three')).toEqual(3);
    expect(testStack.first.val).toEqual('three');
    expect(testStack.size).toEqual(3);

    expect(testStack.last.val).toEqual('one');
  });

test('Poping from an empty stack returns null.', () => {
let testStack = new Stack()
expect(testStack.pop()).toEqual(null);
});

test('Popping from a stack with 1 element sets first and last properties to null, returns value of removed node.', () => {
let testStack = new Stack()
testStack.push('one');
expect(testStack.pop()).toEqual('one');
expect(testStack.first).toEqual(null);
expect(testStack.last).toEqual(null);
expect(testStack.size).toEqual(0);
});

test('Popping from stack with 2 elements sets first and last equal to same node, reduce size property to 1, returns value of remove node.', () => {
    let testStack = new Stack()
    testStack.push('one');
    testStack.push('two');
    expect(testStack.pop()).toEqual('two');
    expect(testStack.first).toEqual(testStack.last);
    expect(testStack.size).toEqual(1);
})

test('Popping from a stack with multipple elements sets first property to next node, decreses size by 1, returns value of removed node.', () => {
    let testStack = new Stack()
    testStack.push('one');
    testStack.push('two');
    testStack.push('three');
    testStack.push('four');
    testStack.push('five');
    expect(testStack.pop()).toEqual('five');
    expect(testStack.size).toEqual(4);
    expect(testStack.pop()).toEqual('four');
    expect(testStack.size).toEqual(3);
});
