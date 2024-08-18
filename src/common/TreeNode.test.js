import { TreeNode } from './TreeNode';

// FILEPATH: /home/michal/repos/DSA/src/common/TreeNode.test.js


describe('TreeNode', () => {
    it('should assign parent reference when creating children', () => {
        const left = new TreeNode(2)
        const right = new TreeNode(3)
        const root = new TreeNode(1, left, right);

        expect(left.parent).toBe(root);
        expect(right.parent).toBe(root);
    })
});