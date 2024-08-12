const unsorted = [6, 2, 4, 5, 11, 98, 73, 1, 6];

function ascComparator(a, b) {
    return a < b;
}

function descComparator(a, b) {
    return a > b;
}

function selectionSort(sortMe, comparator) {
    const sorted = [];

    while (sortMe.length > 0) {
        let indexToPush = 0;
        sortMe.forEach((item, index) =>  {
            if(comparator(item, sortMe[indexToPush])) {
                indexToPush = index;
            }
        })

        sorted.push(sortMe[indexToPush]);
        sortMe = sortMe.slice(0, indexToPush).concat(sortMe.slice(indexToPush + 1))
    }

    return sorted
}

console.log(selectionSort(unsorted, ascComparator));
console.log(selectionSort(unsorted, descComparator));
