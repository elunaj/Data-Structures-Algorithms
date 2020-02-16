class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {

		return this.top.value;

	}

	push(value) {

		const newNode = new Node(value);

		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode; 
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}

		this.length++;
		return this;

	}

	pop() {
		//check length

		if (!this.top) {
			return null;
		}

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;
		return holdingPointer;

	}
	isEmpty() {
		return this.length === 0;
	}

}

let myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');

myStack.pop();
myStack.pop();
console.log(myStack.peek());

console.log(myStack);


//Discord
//Udemy
//google