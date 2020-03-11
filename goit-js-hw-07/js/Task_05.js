const inputRef = document.querySelector('#name-input');
const nameInputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
	nameInputRef.textContent = event.target.value;
});
