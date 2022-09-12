class Array {
  constructor() {
    this.arr = [];
    this.length = 0;
  }

  push(value) {
    this.arr[this.length++] = value;
  }

  pop() {
    if (this.isEmpty()) return 'array is empty';

    let popedValue = this.arr[this.length - 1];
    this.length--;
    return popedValue;
  }

  peek() {
    if (this.isEmpty()) return 'array is empty';

    return this.arr[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myArr = new Array();

myArr.push(5);
myArr.push(15);
myArr.push(25);

console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.peek());
console.log(myArr);
