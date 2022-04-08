// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
//     console.log("i end loop" + i);
// }
    
// console.log("outside of the loop " + i);

// function getTotal(arrayOfNumbers) {
    
//     var sum = arrayOfNumbers[0];
      
//     for(var i=0; i<arrayOfNumbers.length; i++) {
//       sum += arrayOfNumbers[i];
//       console.log("the current sum is: " + sum); 
//     }
      
//     console.log("the total is: " + sum);
      
//   }
      
//   getTotal([1, 3, 5]);
  

// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// // your code here!
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0){
//         countPositives++;
//     };
// }
    
// console.log("there are " + countPositives + " positive values");

// var x = 5;
    
// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
    
// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);

// function reverse(arr){
//     var reversed = [];
//     for (let i = arr.length-1; i >=0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverse([1,2,3,4,5,6]));


// var pokémon = [
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];

// for (let i = 0; i < pokémon.length; i++) {
//     console.log(pokémon[i].id);
//     if (pokémon[i].id % 3 == 0){
//         console.log(pokémon[i]);
//     }

//     if(pokémon[i].types.length > 1){
//         console.log(pokémon[i]);
//     }

//     if(pokémon[i].types == "poison"){
//         console.log(pokémon[i]);
//     }

//     if(pokémon[i].types[1] == "flying"){
//         console.log(pokémon[i].types[0]);
//     }
// }

// double for loop
// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];
    
// // We can console.log the `8` in this array if we
// //console.log(arr2d[0][2]);
// // the first index `0` will select the `[2, 5, 8]` sub-array
// // the second index `2` will select the `8` out of that sub-array

// function isPresent2d(arr2d, value){
//     var isPresent = false; 
//     for (let i = 0; i < arr2d.length; i++) {
//          console.log(arr2d[i]);
//          for (let j = 0; j < arr2d[i].length; j++) {
//              if(arr2d[i][j] == value){
//                 console.log(arr2d[i][j]);
//                 isPresent = true;
//          }
//     }
//     }
//     return isPresent;
// }

// console.log(isPresent2d(arr2d,7));

// flatten an array
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
//console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr2d){
    var flatArray = []; 
    for (let i = 0; i < arr2d.length; i++) {
         for (let j = 0; j < arr2d[i].length; j++) {
                flatArray.push(arr2d[i][j]);
    }
    }
    return flatArray;
}

console.log(isPresent2d(arr2d));
