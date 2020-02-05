function myReverse(str) {

	let strArr = str.split('');
	const newArr = [];

	for (let i = strArr.length - 1; i >= 0; i--) {
		newArr.push(strArr[i]);
	}

	return newArr;
}

function zToMReverse(str) {
	//check input
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'hmm that is not good';
	}

	const backwards = [];
	const totalItems = str.length - 1;
	//no need to split into arrays because strings are essentially array of characters

	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}

	console.log(backwards);

	return backwards.join('');
}

function zToMReverse2(str) {
	return str.split('').reverse().join('');
}

const zToMReverse3 = str => str.split('').reverse().join('');

//or 

//const zToMReverse3 = str => [..str].reverse().join('');

console.log(zToMReverse3('Hi My name is elias'))