class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {

		const newNode = new Node(value);

		if (this.root === null) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					//Left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return;
					}
					currentNode = currentNode.left;
				} else {
					//Right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return;
					}
					currentNode = currentNode.right;
				}
			}
		}
		return this;
	}

	lookup(value) {

		let currentNode = this.root;

		while (currentNode !== null) {

			if (value == currentNode.value) {
				return true;
			}

			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		return false;

	}

	//remove
}


function traverse(node) {
	const tree = { value: node.data };
	tree.left = node.left === null ? null :
	traverse(node.left);
	tree.right = node.right === null ? null :
	traverse(node.right);
	return tree;
}

// CREATE
//    9
//  4   20
//1  6 15 170

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(23));

// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.root);




