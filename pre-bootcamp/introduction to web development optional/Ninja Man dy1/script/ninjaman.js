var world = [
    [1,1,1,1,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,2,2,1],
    [1,1,1,1,1]
];

var worldDict = {
    0:"bank",
    1:"wall",
    2:"sushi"
}

function drawWorld(){
    output = "";

    for(var row = 0; row < world.length; row++) {
        output += "<div class='row'></div>";
        for (let x = 0; x < world[row].length; x++) {
            //console.log("value: " + world[row][x]);
            output+= worldDict[world[row][x]];
        }
    }
    document.getElementById("world").innerHTML = output;
}

drawWorld();