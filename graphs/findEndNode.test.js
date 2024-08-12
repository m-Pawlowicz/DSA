import { findEndNode } from './findEndNode';

// FILEPATH: /home/michal/repos/DSA/graphs/findEndNode.test.js


// Existing tests
test('handles graph without cycles', () => {
    expect(findEndNode(2, [1, 7, 3, 4, 2, 6, 9], [3, 3, 4, 6, 6, 9, 5])).toBe(5);
});

test('handles graph with a cycle', () => {
    expect(findEndNode(9, [11, 7, 10, 9, 8, 4, 1], [1, 10, 11, 10, 11, 8, 4])).toBe(8);
});

test('handles graph with multiple cycles', () => {
    expect(findEndNode(4, [1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 1])).toBe(3);
});

test('handles graph with no cycles', () => {
    expect(findEndNode(7, [1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])).toBe(7);
});

test('handles graph with self-loop', () => {
    expect(findEndNode(3, [1, 2, 3, 4, 5, 6], [2, 3, 3, 5, 6, 1])).toBe(3);
});

test('handles when item is not present in the graph at all', () => {
    expect(findEndNode(12, [1, 2, 3, 4, 5, 6], [2, 3, 3, 5, 6, 1])).toBe(null);
});
