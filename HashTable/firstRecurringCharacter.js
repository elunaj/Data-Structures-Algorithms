//Google Question
//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

//Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//It should return 1


//Given an array = [2, 3, 4, 5];
//It should return undefined 

const findFirstRecurringCharacter = (array) => {
	let value = 0;
	let firstOccurs = 0;
	const arrayMap = new Map();

	for (let i = 0; i <= array.length - 1; i++) {

		let valueOfI = array[i];

		for (let j = i + 1; j <= array.length - 1; j++) {

			if(valueOfI === array[j]) {

				let difference = Math.abs((i + 1) - (j + 1));
				let previousDiff = arrayMap.get(valueOfI);

				console.log(previousDiff);
				if (difference < previousDiff) {
					arrayMap.set(valueOfI, difference);
					console.log('difference: ', difference, 'value: ', valueOfI);
				} 			
			
			}

		
		}
	}

	return arrayMap;
}

const test = findFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);

console.log('size ', test.size);