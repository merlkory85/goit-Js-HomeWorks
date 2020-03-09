const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
	const listRef = document.createElement('li');
	ingredientsList.appendChild(listRef);
	console.log((listRef.textContent = ingredient));
});

console.log(ingredientsList);
