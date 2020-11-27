class MyCircularDeque {
  constructor(k) {
    this.front = 0;
    this.real = 0;
    this.capacity = k + 1;
    this.list = Array(this.capacity);
  }
  insertFront(val) {
    if (this.isFull()) {
      return false;
    } else {
      this.front = (this.front - 1 + this.capacity) % this.capacity;
      this.list[this.front] = val;
      return true;
    }
  }
  insertLast(val) {
    if (this.isFull()) {
      return false;
    } else {
      this.list[this.real] = val;
      this.real = (this.real + 1) % this.capacity;
      return true;
    }
  }
  deleteFront() {
    if (this.isEmpty()) {
      return false;
    } else {
      this.front = (this.front + 1) % this.capacity;
      return true;
    }
  }
  deleteLast() {
    if (this.isEmpty()) {
      return false;
    } else {
      this.real = (this.real - 1 + this.capacity) % this.capacity;
      return true;
    }
  }
  getFront() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.list[this.front];
    }
  }
  getRear() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.list[(this.real - 1 + this.capacity) % this.capacity];
    }
  }
  isEmpty() {
    return this.real == this.front;
  }
  isFull() {
    return (this.real + 1) % this.capacity == this.front;
  }
}

let test = new MyCircularDeque(4);
test.insertFront(1);
test.insertFront(2);
test.insertFront(3);
test.deleteLast();
test.deleteLast();
test.deleteLast();
console.log(test.getRear());
