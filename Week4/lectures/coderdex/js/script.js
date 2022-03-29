var currentUsername = "";

var cardsDiv = document.querySelector("#cards");

function getUserName(element){
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data){
    var res = `
    <div class="card">
        <img src="${data.avatar_url}" alt="${data.login}">
        <div>
        <h3>${data.login} - ${data.name}</h3>
        <p>Location:${data.location}</p>
        <p>Repositories: ${data.public_repos}</p>
        </div>
    </div>
     `;
    //console.log(res);

    return res;
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var programmerData = await response.json();
    console.log(programmerData);
    cardsDiv.innerHTML = makeCoderCard(programmerData) + cardsDiv.innerHTML;
}