class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head == null) {
      return (this.head = new Node(value));
    }
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      // console.log(pointer);
      pointer = pointer.nextNode;
    }
    return (pointer.nextNode = new Node(value));
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const myList = new LinkedList();

console.log(myList.append(10));
console.log(myList.append(5));
console.log(myList.append(6));
console.log(myList.append(4));
console.log(myList.append(9));
