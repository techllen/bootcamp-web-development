//js objects used a key value pair approach 
//separated by comma
var today = new Date().getDay;
var sandwich1 = {
    bread:"brown-bread",
    proteins:["london broil","bacon"],
    cheese:["provolone","pepperjack"],
    condiments:["mayo","tomatoes","mayo"],

    display: function (){
        console.log("the sandwich has:" + this.bread );

    }
}
//console.log(sandwich1.bread);
console.log(today);
sandwich1.display();