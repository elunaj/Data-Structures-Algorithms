//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculations = 0;

function fibonacci(n) { //0(2^n)

	if (n < 2) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibMaster() { //0(n)
	
	const cache = new Map();
	
	return function fib(n) {
		calculations++;
		
		if (cache.has(n)) {
			return cache.get(n);
		} else {

			if (n < 2) {
				return n;
			} else {
				cache.set(n, fib(n - 1) + fib(n - 2));
				return cache.get(n);
			}

		}
	}
}

function fibMaster2(n) {
	let answer = [0, 1];
	for (let i = 2; i <= n; i++) {
		answer.push(answer[i-2] + answer[i-1]);
	}
	return answer.pop();
}

const fasterFib = fibMaster();
console.log('DP', fasterFib(10));
console.log('DP2', fibMaster2(10));
console.log('we did ' + calculations + ' calculations');