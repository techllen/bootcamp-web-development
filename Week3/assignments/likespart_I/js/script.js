console.log("Connected to JS");

var likes = 0;
function addLikes(){
    likes ++;
    document.querySelector('.likes-count').innerHTML = likes;
}