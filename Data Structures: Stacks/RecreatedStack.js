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
		if (this.length === 0) {
			return null;
		} else {
			return this.top.value;
		}
		

	}

	push(value) {

		const newNode = new Node(value);

		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {

			newNode.next = this.top;
			this.top = newNode;
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

		this.top = this.top.next;
		this.length--;
		return this;

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
//myStack.pop();

console.log(myStack.peek());

console.log(myStack);


//Discord
//Udemy
//google