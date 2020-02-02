"use strict";

let message;
const formatString = function(string) {
  const arrayString = string.split("");
  arrayString.splice(39);
  const arrayStitch = arrayString.join("");

  if (string.length < 40) {
    console.log(arrayStitch);
  } else {
    console.log(`${arrayStitch}...`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique ADAA."
  )
);
// вернется форматированная строка
