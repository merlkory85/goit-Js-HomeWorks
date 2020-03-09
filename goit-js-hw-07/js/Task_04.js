const btnOnClickIncrement = document.querySelector("[data-action='increment']");
const btnOnClickDecrement = document.querySelector("[data-action='decrement']");
const totalResult = document.querySelector('#value');
const containerButton = document.querySelector('#counter ');

let counterValue = 0;
const increment = () => {
	counterValue += 1;

	document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
	counterValue -= 1;

	document.getElementById('value').textContent = counterValue;
};
btnOnClickIncrement.addEventListener('click', increment);
btnOnClickDecrement.addEventListener('click', decrement);
