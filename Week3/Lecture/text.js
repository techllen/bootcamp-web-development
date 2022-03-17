console.log("hello world");


//string interpolation
var fname = "aloyce";
var lname = "kisaro";
var fullname = `${fname} ${lname}`;
console.log(fullname);

var comment = "This is ";

console.log(comment + fullname);


var dog = {
    hair:"PerformanceEntry",
    color:"black",
    agressionLevel:"very angry"
}

console.log(dog);

//loads all everything we can get from a window
//console.log(window);

//load the DOM
//console.log(document);

var number=1;
function count() {
 number++;
 console.log(number);
}

count();
