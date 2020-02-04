"use strict";
// const arrayString;
let message;
const spamToFind = "[spam]";
const spamToFind2 = "sale";
const checkForSpam = function(message) {
  const arrayString = message.toLowerCase().split(" ");

  for (const word of arrayString)
    if (spamToFind === word) {
      return "true";
    } else if (spamToFind2 === word) {
      return "true";
    }

  return "false";
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
