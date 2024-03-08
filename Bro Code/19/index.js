let username = "";
while(username === "" || username === null){
    username = window.prompt("Enter your name");
}

console.log(`hello ${username}`);

let firstname = "";
do{
    firstname = window.prompt("Enter your first name")
}
while(firstname === "" || username === null)

console.log(`${firstname} is your first name`);

let loggedIn = false;
let NewUsername;
let password;

while(!loggedIn){
    NewUsername = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(NewUsername === "Tom" || password === "123"){
        loggedIn = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid");
    }
}