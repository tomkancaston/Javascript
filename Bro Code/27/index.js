// spread = expands an array into seperate elements
// rest = bundles separate elements into an array

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;

    }
    return result;
}
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;

    }
    return result / numbers.length;
}

const total = sum(1);

console.log(`Your total is $${total}`);

const totalScore = getAverage(75,100,85,90,50);

console.log(totalScore);

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
function combineStrings(...strings){
    return strings.join(" ");
}

console.log(fullName);