function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var pizza1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);

var pizza2 = pizzaOven("hand tossed","marinara",["mozzerilla","feta"],["mushrooms","olives","onions"]);

var pizza3 = pizzaOven("pizza flour","garlic",["4 cheess"],["brocolli","sausage","ham","mushrooms"]);

var pizza4 = pizzaOven("italioano","alfredo",["5 chees"],["bacon","olives","ham","greenpaper"]);

var pizzaCollection = [pizza1,pizza2,pizza3,pizza4];

function randomPizza(pizzaCollection){
    var selectedPizza = Math.floor(Math.random()*(pizzaCollection.length))
    for(var i = 0;i < pizzaCollection.length;i++){
        if(i == selectedPizza){
            console.log(pizzaCollection[i]);
        }
    }
}

randomPizza(pizzaCollection);

