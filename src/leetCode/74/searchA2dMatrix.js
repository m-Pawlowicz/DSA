/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    // if last element in row is smaller than target;
    // then target is NOT in any row below the current one;

    // if first element in row is bigger than target;
    // then target is not present in the matrix

    for(let i =0; i < matrix.length; i ++) {
        const currentRow = matrix.at(i);

        if(currentRow.at(0) > target) {
            return false;
        }

        if(currentRow.at(-1) < target ) {
            continue;
        }

        if(searchRow(currentRow)) {
            return true;
        }
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

    return false;
};

export {searchMatrix}