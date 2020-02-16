class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;

	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1; 
	}
	append(value) {
		// Code here

		const newNode = new Node(value);

		newNode.prev = this.tail;
		
		this.tail.next = newNode;
		this.tail = newNode; 
		this.length++;
		return this;

	}

	prepend(value) {
		// Code here
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head.prev = newNode;
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
		//check params
		if (index >= this.length) {
			return this.append(value);
		}

		if (index === 0) {
			return this.prepend(value);
		}

		const newNode = new Node(value);

		let leader = this.traverseToIndex(index - 1);

		const follower = leader.next;
		newNode.prev = leader;
		newNode.next = follower;
		leader.next = newNode;
		follower.prev = newNode;
		
		this.length++;
		return this;
	}

	traverseToIndex(index) {
		//check params
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		//check params
		if (index === 0) {
			return this.head = this.head.next;
		}

		if (index > this.length) {
			return "No Good."
		}

		let leader = this.traverseToIndex(index - 1);
		this.length--;

		return leader.next = leader.next.next;
	}

}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
// myLinkedList.insert(20, 89);

// console.log(myLinkedList.printList());
// myLinkedList.remove(2);


console.log(myLinkedList.printList());


console.log(myLinkedList);