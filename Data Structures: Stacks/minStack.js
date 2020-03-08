class Stack {
	constructor() {
		this.data = [];
	}

	push(x) {

		this.data.push({
			value: x,
			min: this.data.length === 0 ? x : Math.min(x, this.getMin())
		});
	}

	pop() {

		if (!this.data.length) {
			return null;
		}

		this.data.pop();
	}

	top() {

		if (!this.data.length) {
			return null;
		}

		return this.data[this.data.length - 1].value;
	}

	getMin() {

		if (!this.data.length) {
			return null;
		}

		return this.data[this.data.length - 1].min;

	}

}

const stack = new Stack();

stack.push(-3);
stack.push(0);
stack.push(-2);
stack.push(-4);
stack.pop();

console.log(stack.getMin());



let top = stack.top();

console.log(top)
console.log(stack)
