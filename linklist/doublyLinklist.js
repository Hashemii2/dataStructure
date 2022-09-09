class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 1;
  }

  addNode(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  removeNode(value) {
    let node = this.head;
    let prev = this.head;

    if (value == node.value) this.head = node.next;

    while (node.value !== value) {
      prev = node;
      node = node.next;
    }

    prev.next = node.next;
    node.next.previous = prev;
    this.size--;
    return `node ${node.value} from List deleted`;
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let [oldNode, prev, counter] = this.findNodeAtIndex(index);

    newNode.next = oldNode;
    newNode.previous = prev;
    prev.next = newNode;

    if (counter == this.size - 1) this.tail = newNode;
    console.log(counter, this.size);

    this.size++;
  }

  insertFirst(value) {
    let node = new Node(value);

    node.next = this.head;
    this.head.previous = node;
    this.head = node;
    this.size++;
  }

  findNodeAtIndex(index) {
    let oldNode = this.head;
    let prev = this.head;

    let counter = 0;

    while (counter !== index) {
      counter++;
      prev = oldNode;
      oldNode = oldNode.next;
    }

    return [oldNode, prev, counter];
  }

  findLastNode() {
    return this.tail;
  }

  toArray() {
    let node = this.head;
    let arr = [];

    while (node) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }
}

const doublyLinklist = new DoublyLinkList();
doublyLinklist.addNode(4);
doublyLinklist.addNode(14);
doublyLinklist.addNode(24);
// doublyLinklist.addNode(34);
doublyLinklist.insertFirst(3);
doublyLinklist.insertAt(54, 3);

console.log(doublyLinklist.removeNode(14));

console.log(doublyLinklist.toArray());
console.log(doublyLinklist.head.next.next.previous);
