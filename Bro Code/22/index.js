function happyBirthday(name){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${name}!`);
    console.log("Happy birthday to you!");
}

happyBirthday("Tom");

function add(x, y){
    let result = x+y;
    return result; //or return x+y
}

let answer = add(2,3);
console.log(answer);

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

console.log(divide(2, 3));

function isEven(numb){
    return numb % 2 === 0 ? true : false;
}

console.log(isEven(12));

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("Tom@gmail.com"));