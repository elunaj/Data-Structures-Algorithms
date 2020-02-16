class Stack {
	constructor() {
		this.array = [];
	}

	peek() {

		if(this.array.length === 0) {
			return null;
		} else {
			return this.array[this.array.length - 1];
		}

	}

	push(value) {

		this.array.push(value);

		return this;

	}

	pop() {
		//check length

		this.array.pop();

		return this;


	}

	isEmpty() {

		return this.array.length === 0;

	}

}

let myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');

myStack.pop();
myStack.pop();
// myStack.pop();

console.log(myStack.isEmpty());
console.log(myStack.peek());

console.log(myStack);


//Discord
//Udemy
//google