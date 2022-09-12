class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
  }

  peek() {
    return this.last.value;
  }

  pop() {
    if (this.isEmpty()) return null;

    let first = this.first;
    let prev = this.first;

    while (first.next) {
      prev = first;
      first = first.next;
    }

    if (this.first == this.last) this.last = this.first = null;
    else {
      prev.next = null;
      this.last = prev;
    }

    this.length--;

    return first.value;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

// console.log(stack.isEmpty());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// console.log(stack.peek());
