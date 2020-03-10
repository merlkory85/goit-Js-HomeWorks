const inputRef = document.querySelector('#name-input');
const nameInputRef = document.querySelector('#name-output');

inputRef.addEventListener('change', event => {
	nameInputRef.textContent = event.target.value;
});
