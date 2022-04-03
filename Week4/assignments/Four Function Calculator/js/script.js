console.log("connected to js"); 

var value;
var operation;

document.querySelector("#display").innerText = value;


function press(value){
    return value;
}

function setOP(operation){
    return operation;
}

function calculate(){
    var equalSign = document.querySelector("#equals").innerText;
    console.log(equalSign);
}