function hello(callback){
    console.log("Hello!");
    callback;
}

hello();

function goodbye(){
    console.log("Goodbye!");
}

goodbye();

hello(wait);

function leave(){
    console.log("Leave!");
}

function wait(){
    console.log("Wait!");
}

function sum(callback, x, y){
    let result = x + y;
    callback(result);

}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result
}

sum(displayPage, 1, 2);