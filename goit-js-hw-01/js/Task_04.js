"use strict";

let credits = 23580;
const pricePerDroid = 3000;
const userRequest = Number(
  prompt("Какое количество дроидов вы хотите приобрести???")
);
const totalPrice = userRequest * pricePerDroid;
const accountBalance = credits - totalPrice;

if (userRequest === null) {
  alert("Отменено пользователем!");
  if (userRequest === NaN) {
    alert("Было введено не число, попробуйте еще раз");
  }
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else {
  alert(
    `Вы купили ${userRequest} дроидов, на счету осталось ${accountBalance} кредитов D=)`
  );
}

console.log(userRequest);
