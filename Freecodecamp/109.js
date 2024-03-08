function printManyTimes(str){
    "use strict";

    const SETENCE = str + " is cool!";

    for(let i=0;i<str.length;i+=2){
        console.log(SETENCE);
    }

}
printManyTimes("freecodecamp");
