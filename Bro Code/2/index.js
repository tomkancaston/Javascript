let x = 100;

console.log(x);

let age = 25;

let price = 10.99;

let gpa = 3.0;

console.log(price);
console.log(age);

console.log(`You are ${age} years old`);
console.log(`The coffee is ${price} dollars`);
console.log(`Your GPA is ${gpa}`);

console.log(typeof price);

let firstName = "Mike";
let lastName = " Tyson";
let fullName = firstName + lastName;


console.log(typeof firstName);
console.log(firstName);


let online = true;
let isStudent = true;

console.log(typeof online);

console.log(`Bro is online: ${online}`);
console.log(`Enrolled: ${isStudent}`)

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = `Is not student ${isStudent}`;