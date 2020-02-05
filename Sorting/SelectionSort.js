const numbers = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]

function selectionSort(array) {

	const length = array.length;

	for (let i = 0; i < length; i++) {
		// set current index as minimum
		let min = i;

		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				//update minimum if current is 
				//lower than what we had previously
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