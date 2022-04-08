//console.log("connected to js"); 

// var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
//                 [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
//                 [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
//                 [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
//                 [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
//                 [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
//                 [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
//                 [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
//                 [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
//                 [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");

function createRandomDojo() {
    var theRandomDojo = [...Array(10)].map(x => Array(10).fill(0));
    for(var i=0; i<10; i++) {
        var randomColumn = Math.floor(Math.random()*(10));
      for(var j=0; j<10; j++) {
          var randomRow = Math.floor(Math.random()*(10));
          theRandomDojo[randomColumn][randomRow] = 1;
      }
    }
    //console.table(theRandomDojo);
    return theRandomDojo;
  }

var theDojo = createRandomDojo();
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  //counting the number of ninjas places when max in 10 break out from the loop
  //var totalNinjasPlaced = 0;
  for(var i=0; i<theDojo.length; i++) {
      //generating random columns
      var randomColumn = Math.floor(Math.random()*(theDojo.length));
    for(var j=0; j<theDojo[i].length; j++) {
        // placing all zeros in the dojo
        theDojo[i][j] = 0;
        //generating random row
        var randomRow = Math.floor(Math.random()*(theDojo[i].length));
        //generated random value max 1
        //var randomValue = Math.floor(Math.random()*(2));
        // 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
        theDojo[randomColumn][randomRow] = 1;
        //totalNinjasPlaced++;
        //console.log(totalNinjasPlaced);
        // if (totalNinjasPlaced == 10){
        //     break;
        // }
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this),drawNumberIntoTheBottom(${i}, ${j})"></button>`;
    }
  }
  console.table(theDojo);
  return result;
}


    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  console.log({i, j});
  var top = theDojo[i-1][j];
  var topLeft = theDojo[i-1][j-1];
  var topRight = theDojo[i-1][j+1];
  var bottom = theDojo[i+1][j];
  var bottomLeft = theDojo[i+1][j-1];
  var bottomRight = theDojo[i+1][j+1];
  var left = theDojo[i][j-1];
  var right = theDojo[i+1][j+1];
  alert('Hiding Ninjas\n\n' +
        `top ${top}\n` +
        `top-left ${topLeft}\n` +
        `top-Right ${topRight}\n` +
        `bottom ${bottom}\n` +
        `bottom-left ${bottomLeft}\n` +
        `bottom-right ${bottomRight}\n` +
        `left ${left}\n` +
        `right ${right}\n` 
  );
  console.log(element);

  if (theDojo[i][j] == 1){
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`
  }
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
var ninjas = document.createElement("div");

function drawNumberIntoTheBottom(i,j){

    var hidingNinjasDiv = `<div class="hiding-ninjas-display">
    <table>
        <tr>
            <th>Position</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Top</td>
            <td>${theDojo[i-1][j]}</td>
        </tr>
        <tr>
            <td>Top Left</td>
            <td>${theDojo[i-1][j-1]}</td>
        </tr>
        <tr>
            <td>Top Right</td>
            <td>${theDojo[i-1][j+1]}</td>
        </tr>
        <tr>
            <td>Bottom</td>
            <td>${theDojo[i+1][j]}</td>
        </tr>
        <tr>
            <td>Bottom Left</td>
            <td>${theDojo[i+1][j-1]}</td>
        </tr>
        <tr>
            <td>Bottom Right</td>
            <td>${theDojo[i+1][j+1]}</td>
        </tr>
        <tr>
            <td>Left</td>
            <td>${theDojo[i][j-1]}</td>
        </tr>
        <tr>
            <td>Right</td>
            <td>${theDojo[i+1][j+1]}</td>
        </tr>
    </table>
    </div>`

    ninjas.innerHTML = hidingNinjasDiv;
    document.body.appendChild(ninjas);
}

// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot

// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
//console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

