let username;

username = window.prompt("What is your username?");

console.log(username);

let myUsername;
document.getElementById("mySubmit").onclick = function(){
    myUsername = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${myUsername}`;
}