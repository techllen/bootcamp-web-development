function findAvg(arr){
    var sum=0;
    var avg=0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+arr[i];;
    }
    avg=(sum/arr.length);
    return avg;
}

var arr = [2,2,2,2,2];
console.log(findAvg(arr));