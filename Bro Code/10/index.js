let age = -1;

let time = 18;

if(time < 12){
    console.log("Good morning!");
}

else if(time > 12, time < 18){
    console.log("Good afternoon");
}

else{
    console.log("Good evening");
}

let isStudent = false;

if(isStudent){
    console.log("You are a student");
}

else{
    console.log("Your are not a student!");
}

let hasLicense = false;

if(age >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license");

    }
    else{
        console.log("You do not have your license yet");
    }
}
else{
    console.log("You must be 16+ to drive");
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age>=18){
        resultElement.textContent = ("You are old enough to enter this site");
    }
    else if(age==0){
        resultElement.textContent = ("You cant enter. You're just born")
    }
    else if(age<0){
        resultElement.textContent = ("Your age cant be below 0");
    }
    else{
        resultElement.textContent = ("You must be 18+ to enter this site");
    }
}