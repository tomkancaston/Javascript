function isLess(a, b){
    if(a<b){
        console.log("A is less than B");
        return true;
    }
    else{
        console.log("A is not less than B");
        return false;
    }
}

console.log(isLess(10, 15));