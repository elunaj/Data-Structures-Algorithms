var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));

console.log(beasts.findIndex( item => {
	return item === 'Godzilla';
}))

console.log(beasts.find( item => {
	return item === 'Godzilla';
}))

console.log(beasts.includes('Godzilla'));