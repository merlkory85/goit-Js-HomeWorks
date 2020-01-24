"use strict";

let country;
let price;
let message;
const userRequest = "Введите страну для доставки товара";
const promptOutput = prompt(userRequest);
const userChoice = userRequest.toLowerCase();
if (promptOutput === null) {
  console.log("Отменено пользователем");
}
switch (userChoice) {
  case "китай":
    country = "Китай";
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "чили":
    country = "Чили";
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "австралия":
    country = "Австралия";
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "индия":
    country = "Индия";
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  case "ямайка":
    country = "Ямайка";
    price = 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;
  default:
    message = "В вашей стране доставка не доступна";
    alert(message);
}

console.log(message);
