const numbers = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const test = [5, 4, 3, 6, 1];

function insertionSort(array) {

	let length = array.length;

	for (let i = 1; i < length; i++) {
		let j = i - 1;
		let temp = array[i];

		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j];
			j--;
		}

		array[j + 1] = temp;
	}

	return array;

}


console.log(insertionSort(numbers));