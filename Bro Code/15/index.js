const fullName = "Broseph Code";

let firstName = fullName.slice(0, 2);
let lastName = fullName.slice(4, 8);

console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" "), + 1);

console.log(firstName);
console.log(lastName);

const email = "Bro1@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(userName);
console.log(extension);
