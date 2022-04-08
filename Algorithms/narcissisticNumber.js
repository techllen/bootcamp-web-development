function squareEveryDigitInANumberAndConcatenate(number){
    var finalStringNumber = " ";
    // convert number into string
    var numberString = number.toString();
    //console.log(numberString);
    //iterate through a number string
    for (var i = 0; i < numberString.length; i++) {
    //console.log(numberString[i]);
    //convert the individual numbers to integer,square it and put it back into 
    //string for concatenation
    var individualIntSquareString = (Math.pow(parseInt(numberString[i]),2)).toString();
    //concatenate each square string number
    finalStringNumber += individualIntSquareString;
    }
    //converting the final string to integer
    return parseInt(finalStringNumber);
}

console.log(squareEveryDigitInANumberAndConcatenate(9119));
console.log(squareEveryDigitInANumberAndConcatenate(92));
console.log(squareEveryDigitInANumberAndConcatenate(12));

