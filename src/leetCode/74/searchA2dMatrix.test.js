import { searchMatrix } from "./searchA2dMatrix";

it("searches the matrix correctly", () => {
  expect(searchMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ], 5)).toBe(true);
  
  expect(searchMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ], 0)).toBe(false);
  
  expect(searchMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ], 9)).toBe(true);
});
