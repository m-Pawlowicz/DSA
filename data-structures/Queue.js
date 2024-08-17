export class Queue {

    data = [];
    constructor(data) {
        this.data = data;
    }

    push(value) {
        return this.data.push(value)
    }

    pop() {
        return this.data.shift()
    }

    top() {
        return this.data.at(0);
    }

    get size() {
        return this.data.length
    }
}