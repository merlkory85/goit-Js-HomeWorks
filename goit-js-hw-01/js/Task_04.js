"use strict";

let credits = 23580;
const pricePerDroid = 3000;
const userRequest = Number(prompt("Какое количество дроидов вы хотите приобрести???"));
const totalPrice = userRequest * pricePerDroid;
const accountBalance = credits - totalPrice;
const notANumber = Number.isNaN(userRequest);
let message;

if (notANumber) {
  message = "Вы ввели не число, попробуйте еще раз!!!";
  } else {
     message = `Вы купили ${userRequest} дроидов, на счету осталось ${accountBalance} кредитов D=)`;
}

if (userRequest === null) {
  message = "Отменено пользователем!";
  // break;
}

if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
  // break;
  // } else {
  //   message = `Вы купили ${userRequest} дроидов, на счету осталось ${accountBalance} кредитов D=)`;
}
console.log(message);
