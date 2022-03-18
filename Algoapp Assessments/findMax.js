function findMax(arr){
    //code
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

var arr = [5,2,3,8];
console.log(findMax(arr));
