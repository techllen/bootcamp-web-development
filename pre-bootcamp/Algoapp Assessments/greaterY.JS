function greaterY(arr,Y){
    var bigArry = [];
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>Y){
            bigArry.push(arr[i]);
        }
    }
    count = bigArry.length;
    return count;
}

console.log(greaterY([1,3,5,6,7],5));