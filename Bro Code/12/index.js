let age = 12;
let agemessage = age >= 18 ? "You're an adult" : "You're a minor";
console.log(agemessage);

let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);


let message;
let isStudent = false;
message = isStudent ? "You are a student" : "You're NOT a student";
console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount *(discount/100)}`);