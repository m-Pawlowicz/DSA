import { inorderTraversal } from './Inorder';
import { TreeNode } from '../../TreeNode/TreeNode';

// Existing test case
test('Example Test Case', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
});

// Additional test cases
test('Empty Tree', () => {
    expect(inorderTraversal(null)).toEqual([]);
});

test('Tree with a single node', () => {
    const root = new TreeNode(1);
    expect(inorderTraversal(root)).toEqual([1]);
});

test('Tree with multiple nodes', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
});

// Add more test cases as needed...

