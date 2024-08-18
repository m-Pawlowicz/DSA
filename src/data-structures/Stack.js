export class Stack {
    data = []

    push(value) {
        return this.data.push(value)
    }

    pop() {
        return this.data.pop()
    }

    top() {
        return this.data.at(-1);
    }

    get size() {
        return this.data.length
    }
}