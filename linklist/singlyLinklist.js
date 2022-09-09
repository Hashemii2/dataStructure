class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addNode(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
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
    this.size--;
    return `node ${node.value} from List deleted`;
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    let [oldNode, prev, counter] = this.findNodeAtIndex(index);

    newNode.next = oldNode;
    prev.next = newNode;

    if (counter == this.size - 1) this.tail = newNode;
    console.log(counter, this.size);

    this.size++;
  }

  insertFirst(value) {
    let node = new Node(value);

    node.next = this.head;
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

const linkList = new LinkList();
linkList.addNode(4);
linkList.addNode(14);
linkList.addNode(24);
linkList.addNode(34);
linkList.insertFirst(3);
linkList.insertAt(54, 3);

console.log(linkList.removeNode(3));

console.log(linkList.toArray());
console.log(linkList);
