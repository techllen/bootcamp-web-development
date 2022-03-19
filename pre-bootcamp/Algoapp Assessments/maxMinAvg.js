function maxMinAvg(arr){
    //code
    var arrnew = [];
    var sum = 0;
    var max = 0;
    var min = arr[0];
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }else if(arr[i]<min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    avg=(sum/arr.length);
    arrnew.push(max,min,avg);
    return arrnew;
}

var arr = [5,2,3,8];
console.log(maxMinAvg(arr));