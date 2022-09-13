class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    let root = this.root;

    if (!this.root) {
      this.root = node;
      return;
    }

    while (root.right || root.left) {
      if (value > root.value) {
        if (!root.right) {
          root.right = node;
          return;
        }

        root = root.right;
      } else {
        if (!root.left) {
          root.left = node;
          return;
        }

        root = root.left;
      }
    }

    if (value > root.value) {
      root.right = node;
    } else {
      root.left = node;
    }
  }

  lookup(value) {
    let root = this.root;
    if (!root || value == null || value == undefined) return false;

    while (root && value !== root.value && (root.right || root.left)) {
      if (value > root.value) {
        root = root.right;
      } else {
        root = root.left;
      }
    }

    return root && root.value == value;
  }

  remove(value) {
    let root = this.root;
    let prev = this.root;
    if (!root || value == null || value == undefined) return 'not found';

    while (root && value !== root.value && (root.right || root.left)) {
      if (value > root.value) {
        prev = root;
        root = root.right;
      } else {
        prev = root;
        root = root.left;
      }
    }

    //i will compelete this later
    if (root && root.value == value) {
      if (!root.right && !root.left) {
        root.value > prev.value ? (prev.right = null) : (prev.left = null);
      }
      return true;
    } else {
      return false;
    }
  }
}

const binarySearch = new BinarySearch();

binarySearch.insert(50);
binarySearch.insert(25);
binarySearch.insert(10);
binarySearch.insert(60);
binarySearch.insert(70);
binarySearch.insert(55);
binarySearch.insert(35);

// console.log(binarySearch.lookup(5));
// console.log(binarySearch.lookup(55));

console.log(binarySearch.remove(55));
console.log(binarySearch);
