function swapvalues(arr){
    //code
    var arrnew = [];

    if(arr.length >= 2){
            arrnew=arr;
            [arr[arr.length-1],arr[0]]=[arrnew[0],arrnew[arrnew.length-1]];
    }
    return arrnew;
}

console.log(swapvalues([2,3,4,5,8,9]));

