let catName = "Quincy"; //let cannot be declared two times
let quote;


function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + " say Meow!";
}

console.log(catTalk());