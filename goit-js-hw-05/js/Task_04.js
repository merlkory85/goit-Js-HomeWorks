// "use strict";

// // Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// // Добавь классу следующий функционал:

// // Геттер value - возвращает текущее значение поля _value
// // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }

//   // append(str) {}
// }

// console.log(this._value);

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

"use strict";
class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  set value(newStr) {
    this._value = newStr;
  }

  append(str) {
    const endingStr = this._value.concat(str);
    this.value = endingStr;
    return this.value;
  }
  prepend(str) {
    const beginningtStr = str.concat(this.value);
    this.value = beginningtStr;
    return this.value;
  }
  pad(str) {
    const fullStr = str.concat(this.value, str);
    this.value = fullStr;
    return this.value;
  }
}

const builder = new StringBuilder(".");
builder.append("^");
console.log(builder.value); // '.^'
builder.prepend("^");
console.log(builder.value); // '^.^'
builder.pad("=");
console.log(builder.value); // '=^.^='
