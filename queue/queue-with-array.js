class Queue {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  enqueue(data) {
    this.data.unshift(data);
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const poped = this.data.pop();
    this.length--;
    return poped;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.data[this.length - 1];
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
console.log(queue.dequeue());

console.log(queue.isEmpty());

console.log(queue.peek());

console.log(queue);
