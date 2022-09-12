class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);

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
    if (this.isEmpty()) return null;

    return this.first.data;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.first == this.last) {
      this.last = null;
    }

    let deletedData = this.first.data;
    this.first = this.first.next;
    this.length--;
    return deletedData;
  }

  isEmpty() {
    return this.length == 0;
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.dequeue());

console.log(queue.isEmpty());

console.log(queue.peek());

console.log(queue);
