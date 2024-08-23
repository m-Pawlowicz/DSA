import { sortedArrayToBST } from "./SortedArrayToBst";

it("correctly creates a tree", () => {
  const nums = [-10, -3,-1, 0, 5, 9];

  const result = sortedArrayToBST(nums);
  console.log(result)
});
