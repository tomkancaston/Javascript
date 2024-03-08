function compareEquality(a, b){
    if(a == b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

function compareEquality1(a, b){
    if(a === b){
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality1(10, "10"));