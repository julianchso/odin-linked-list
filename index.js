class LinkedList {
  constructor(listHead = null) {
    this.listHead = listHead;
  }

  append(value) {
    if (this.listHead == null) {
      return (this.listHead = new Node(value));
    }
    let pointer = this.listHead;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return (pointer.nextNode = new Node(value));
  }

  // prepend(value) {
  //   // let tempAddress = this.listHead;
  //   let pointer = this.listHead;
  //   console.log(tempAddress);
  //   console.log(pointer);
  //   pointer.value = value;
  //   // pointer.nextNode = tempAddress;
  //   return this;
  // }

  size() {
    let count = 0;
    let pointer = this.listHead;
    while (pointer !== null) {
      count++;
      pointer = pointer.nextNode;
    }
    return count;
  }

  head() {
    let pointer = this.listHead;
    return pointer;
  }

  tail() {
    let pointer = this.listHead;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  at(index) {
    let pointer = this.listHead;

    let count = 0;
    while (count < index) {
      if (pointer.nextNode == null) {
        console.log(`error: index exceeds length of list`);
        return;
      }
      pointer = pointer.nextNode;
      count++;
    }
    return pointer;
  }

  pop() {
    let pointer = this.listHead;
    while (pointer.nextNode !== null) {
      if (pointer.nextNode.nextNode == null) {
        pointer.nextNode = null;
      } else {
        pointer = pointer.nextNode;
      }
    }
    return this;
  }

  contains(value) {
    if (typeof value != 'number') return `please enter a valid number`;

    let pointer = this.listHead;
    while (pointer.nextNode !== null) {
      if (pointer.value == value) {
        return true;
      } else {
        pointer = pointer.nextNode;
      }
    }
    return false;
  }

  find(value) {
    if (typeof value != 'number') return `please enter a valid number`;

    let index = 0;
    let pointer = this.listHead;
    while (pointer.nextNode !== null) {
      if (pointer.value == value) {
        return index;
      } else {
        pointer = pointer.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    let string = '';
    let pointer = this.listHead;
    while (pointer) {
      string = string + `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    }
    return `${string} + null`;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const myList = new LinkedList();

// Refactor append to take multiple numbers from array.
// let arr = [10, 5, 4, 6, 4, 2]

myList.append(10);
myList.append(5);
myList.append(6);
myList.append(4);
myList.append(9);
myList.append(14);
myList.append(15);
myList.append(16);
// console.log(myList.prepend(999));
// console.log(find(16));
console.log(myList.toString());

// console.log(myList.size());
// console.log(myList.tail());
// console.log(myList.head());

// console.log(myList.pop());
