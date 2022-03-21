//console.log("hello world");


//string interpolation
// var fname = "aloyce";
// var lname = "kisaro";
// var fullname = `${fname} ${lname}`;
// console.log(fullname);

// var comment = "This is ";

// console.log(comment + fullname);


// var dog = {
//     hair:"PerformanceEntry",
//     color:"black",
//     agressionLevel:"very angry"
// }

// console.log(dog);

//loads all everything we can get from a window
//console.log(window);

//load the DOM
//console.log(document);

// var number=1;
// function count() {
//  number++;
//  console.log(number);
// }

// count();

// var num1 = 2
// console.log(num1+3)

// var num2 = 2
//         num2 = num2 + 3
//         console.log(num2)

// function add(num3, num4) {
//     sum = num3 + num4
//     console.log(sum)
//     return sum
// }
// add(2,3)

function displayName(elementName){
    console.log(elementName);
}

function turnOff(element){
    //console.log(element);
    //console.log(window);
    element.innerText = "Off";
    //element.remove();
}


function addShadow(note){
    console.log(note.classList.add("shadow"));
}

function removeShadow(note){
    console.log(note.classList.remove("shadow"));
}