let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[3] = "coconut";

console.log(fruits);

fruits.push("mango");
//fruits.pop();
//fruits.unshift();
//fruits.shift();

console.log(fruits)

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(numOfFruits);

console.log(index);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

console.log(fruits.sort().reverse());
