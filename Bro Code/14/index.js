let userName = "BroCode  ";


console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);

userName = userName.trim();

console.log(userName);

userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(3);
console.log(userName);

let result = userName.startsWith(" ");
console.log(result);

if(result){
    console.log(userName);
}
else{
    console.log("Your username cant begin with ' '");
}

let myResult = userName.endsWith(" ");
console.log(myResult);

if(myResult){
    console.log(userName);
}
else{
    console.log("Your username cant end with ' '");
}

let includeResult = userName.includes(" ");
console.log(includeResult);


let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(13, "0");
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);