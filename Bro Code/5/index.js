let age = window.prompt("How old are you ?");
age = Number(age);
age +=1;

console.log(age, typeof age);

let x = "0";
let y = "pizza";
let z = "pizza"; //"" == false

x =Number(x);
z =Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);