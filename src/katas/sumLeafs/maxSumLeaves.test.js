import { maxSumLeavesRecursive } from "./maxSumLeavesRecursive";
import { maxSumLeavesIterative } from "./maxSumLeavesIterative";
import { TreeNode } from "./TreeNode";

describe.each([maxSumLeavesIterative])('TreeNode Tests', (cb) => {
    const doTest = (expected, input) => {
        expect(cb(input)).toBe(expected);
    }

    test('empty tree', () => {
        doTest(0, null);
    });

    test('root with 2 children', () => {
        doTest(4,
            new TreeNode(1, new TreeNode(2), new TreeNode(3))
        );
    });

    test('linear tree', () => {
        doTest(1 + 2 + 3 + 4,
            new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))))
        );
    });

    test('1st example from description', () => {
        doTest(23,
            new TreeNode(17,
                new TreeNode(3,
                    new TreeNode(2)
                ),
                new TreeNode(-10,
                    new TreeNode(16),
                    new TreeNode(1,
                        new TreeNode(13)
                    )
                )
            )
        );
    });

    test('should stop only at leaves - 2nd example from description', () => {
        doTest(-51,
            new TreeNode(5,
                new TreeNode(4,
                    new TreeNode(-80),
                    new TreeNode(-60)
                ),
                new TreeNode(10,
                    new TreeNode(-90)
                )
            )
        );
    });
});
