const numbers = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const test = [5, 4, 3, 6, 1];

function selectionSort(array) {

	let length = array.length;

	for (let i = 0; i < length; i++) {
		let min = i;

		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}

		let temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

console.log(selectionSort(numbers));