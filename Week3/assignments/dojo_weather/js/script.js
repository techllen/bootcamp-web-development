console.log("connected to JS");

//load report
function alertWeatherReport(element){
    alert("Loading weather report...");
    document.querySelector(".city").innerHTML=element.innerHTML;
}

//remove cookie policy
function removeCookiePolicy(){
    document.querySelector(".cookie-policy").remove();
}

//temperature conversion
function celsiusToFahrenheit(){
    var lowsC = document.querySelectorAll(".low");
    var highsC = document.querySelectorAll(".high");
    var lowsF = [];
    var highsF = [];
//the length of lows and high is the same so the same number of 
//iterations can be used
    for (var i = 0; i < lowsC.length; i++) {
        var lowf = Math.floor(((9/5)*parseInt(lowsC[i].innerHTML)) + 32); 
        lowsF.push(lowf);

        var highf = Math.floor(((9/5)*parseInt(highsC[i].innerHTML)) + 32); 
        highsF.push(highf);
//putting back the values
        (lowsC[i]).innerHTML = `${lowsF[i]}&deg;`;
        (highsC[i]).innerHTML = `${highsF[i]}&deg;`;
    }
}