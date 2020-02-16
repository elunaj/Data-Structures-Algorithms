const randomArray = [6, 5, 3, 1, 8, 7, 2, 4]
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function bubbleSort(array) {

	const length = array.length;

	for (let i = 0; i <= length - 1; i++) {
		for (let j = i + 1; j <= length - 1; j++) {
			//Swap numbers
			if (array[i] > array[j]) {
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}

function bubbleSortMastery(array) {

	const length = array.length;

	for (let i = 0; i <= length - 1; i++) {
		for (let j = 0; j <= length - 1; j++) {
			//Swap numbers
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}


console.log(bubbleSortMastery(randomArray));

console.log(bubbleSortMastery(numbers));