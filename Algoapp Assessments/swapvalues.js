// function swapvalues(arr){
//     //code
//     var arrnew = [];

//     if(arr.length >= 2){
//             arrnew=arr;
//             [arr[arr.length-1],arr[0]]=[arrnew[0],arrnew[arrnew.length-1]];
//     }
//     return arrnew;
// }

// console.log(swapvalues([2,3,4,5,8,9]));

// for (var i = 11; i > 5;i-=2){
//     console.log(i);
//     break;
// }

// function largestValue(){
// 	var array = [3, 55, -10, 19, -27, 6, -2, 0, 11, -4];
// 	var largest = array[0];
// 	//your code here
// 	 for(var i = 0; i <= array.length-1;i++){
// 	     if(array[i] > largest){
//             largest=array[i];
// 	     }
// 	 }
// 	return largest; 
// }

// console.log(largestValue());

// function sum_odd(){
//     var sum = 0;
//     //your code here
//    for(var i = 7; i <= 280;i++){
//        if(i%2==1){
//        sum = sum + i;
//        }
//    }
//     return sum; 
//  }

//  console.log(sum_odd());


function countLessThanX(){
	var array = [-3, -55, 10, -19, 27, -6, 2, 0, -11, -4];
	var x = 14;
	var count = 0;
	//your code here
	var lessThanX = [];
    for(var i = 0; i <= array.length-1;i++){
        if(array[i] < x){
            lessThanX.push(array[i]);
        }
    }
    count = lessThanX.length;
	return count; 
}

console.log(countLessThanX());