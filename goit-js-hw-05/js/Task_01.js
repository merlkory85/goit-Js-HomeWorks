"use strict";

const Account = function(name) {
  this.name = name;
  Account.prototype.getInfo = function() {
    console.log(name);
  };
};

console.dir(Account);
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof"
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com"
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
