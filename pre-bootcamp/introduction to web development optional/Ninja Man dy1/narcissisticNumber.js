function narcissisticNumber(number){
    var numberString = number.toString();
    var stringLenth = numberString.length;
    var total = 0;
    var isNarcissisticNumber = false;
    if (number > 0){
        for (var i = 0; i < stringLenth; i++) {
            //converting individual number to integer then raise then to the power
            //of string length
           total += parseInt(numberString[i])**stringLenth;
        }
        if(total == number){
            isNarcissisticNumber = true;
        }
    }else{
        console.log("the number should be positive");
    }

    return isNarcissisticNumber;
}

console.log(narcissisticNumber(-12));

