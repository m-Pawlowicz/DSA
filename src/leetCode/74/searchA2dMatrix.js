/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export function searchMatrix(matrix, target) {
    // if last element in row is smaller than target;
    // then target is NOT in any row below the current one;

    // if first element in row is bigger than target;
    // then target is not present in the matrix

    // create a binary search approach for searching in the matrix somehow
    


    function search(matrix, l = 0, r = matrix.length - 1) {
       if(!(l <= r)) {
        return false;
       }

        const midIndex = Math.floor((l + r) / 2)
        const midRow = matrix[midIndex];

        const wasFound = searchRow(midRow);

        if(wasFound) {
            return true;
        }

        if(midRow.at(0) > target) {
            return search(matrix, l, midIndex - 1)
        }

        if(midRow.at(-1) < target) {
            return search(matrix, midIndex + 1, r);
        }

        return false;
    }


    
    function searchRow(row, l = 0, r = row.length - 1) {
       if(!(l <= r)) {
        return false;
       }

        const midIndex = Math.floor((l + r) / 2)
        const midValue = row[midIndex];

        if(midValue > target) {
            return searchRow(row, l, midIndex - 1)
        }

        if(midValue < target) {
            return searchRow(row, midIndex + 1, r);
        }

        return true
    }

    return search(matrix);
};
