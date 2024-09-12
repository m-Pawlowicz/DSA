// a Sequence is an interface which can be implemented by any data
// structure available as long as the ds has sequence interface methods

function getLast() {
    return this.at(-1)
}

function getFirst() {
    return this.at(0)
}
function setLast(item) {
    return this[-1] = item
}

function setFirst() {
    return this[0] = item
}


export function buildSequenceArray(...initialData) {
    const arr = [...initialData]
    return Object.assign(arr, {
        setFirst,
        setLast,
        getFirst,
        getLast
    })
}