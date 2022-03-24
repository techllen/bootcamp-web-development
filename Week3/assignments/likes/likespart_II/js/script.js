console.log("Connected to JS");

var likes = [0,0,0];

function addLikes(button){
    classReference = button.classList;
    if (classReference[0] == "btn-1"){
        likes[0]++;
        document.querySelector('.count-1').innerHTML = likes[0];
    }else if(classReference[0] == "btn-2"){
        likes[1]++;
        document.querySelector('.count-2').innerHTML = likes[1];
    }else if(classReference[0] == "btn-3"){
        likes[2]++;
        document.querySelector('.count-3').innerHTML = likes[2];
    }
}