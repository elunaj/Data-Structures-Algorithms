class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {

		const newNode = new Node(value);

		this.tail.next = newNode;
		this.tail = newNode; 
		this.length++;
		return this;

	}

	prepend(value) {

		const newNode = new Node(value);

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;

	}

	printList() {
	 	const array = [];
	 	let currentNode = this.head;
	 	while (currentNode !== null) {
	 		array.push(currentNode.value);
	 		currentNode = currentNode.next;
	 	}

	 	return array;
	}

	insert(index, value) {

		if(index >= this.length) {
			return this.append(value);
		}

		if(index === 0) {
			return this.prepend(value);
		}

		const newNode = new Node(value);

		let listPointer = this.traverseToIndex(index);

		newNode.next = listPointer.next;
		listPointer.next = newNode;

		this.length++;
		return this;

	}

	traverseToIndex(index) {
		
		let previousListNode = this.head;

		for (let i = 0; i < index - 1; i++) {
			previousListNode = previousListNode.next;
		}

		return previousListNode;

	}

	remove(index) {

		if (index === 0) {
			return this.head = this.head.next;
		}

		if (index > this.length) {
			return undefined;
		}

		let listPointer = this.traverseToIndex(index);

		listPointer.next = listPointer.next.next;
		this.length--;

		return this;


	}

	reverse() {

		if(!this.head.next || this.length === 1) {
			return this.head; 
		}

		this.tail = this.head;
		let prev = null;
		let curr = this.head; 
		let next = null;

		while (curr != null) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		this.head = prev;
		return this;

	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 7);

console.log(myLinkedList.printList());

myLinkedList.remove(7);

myLinkedList.reverse();
console.log(myLinkedList.printList());


console.log(myLinkedList.length);

console.log(myLinkedList);