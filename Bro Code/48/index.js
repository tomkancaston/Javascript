let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1,10,2,9,3,8,4,7,5,6];
const people = [{name: "Spongebob", age: 30, GPA: 3.0},
                {name: "Patrick", age: 37, GPA: 1.5}, 
                {name: "Spuidward", age: 51, GPA: 2.5}, 
                {name: "Sandy", age: 27, GPA: 4.0}];
fruits.sort();
numbers.sort((a,b) => a - b);
people.sort((a,b) => a.age - b.age);

console.log(fruits);
console.log(numbers);
console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);