/* Give a number N return the index value of the Fibonacci
sequence where the sequence is:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
the pattern of the sequence is tht each value is the sum of the previous 2
values, that means that for N = 5 -> 2 + 3

*/

function fibonacciIterative(n) {// 0(n)
	//code here;
	let num1 = 0;
	let num2 = 1;
	let acc;

	for (let i = 1; i < n; i++) {
		acc = num1 + num2;
		num1 = num2;
		num2 = acc;
	}

	return acc;
}


console.log(fibonacciIterative(8));


function fibMastery(n) { // 0(n)
	let arr = [0, 1];

	for (let i = 2; i < n + 1; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}

	return arr[n];
}


console.log(fibMastery(8));


function fibonacciRecursive(n) { //o(2^n)
	//code here;
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}


console.log(fibonacciRecursive(40));