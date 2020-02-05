"use strict";

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите число!");

  if (input === null) {
    alert("Отменено пользователем :(");
    break;
  }
  input = Number(input);
  const notANamber = Number.isNaN(input);

  if (notANamber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(input);

  for (const number of numbers) {
    total += number;
  }
}
console.log(numbers);
console.log(`Общая сумма чисел равна - ${total}`);
