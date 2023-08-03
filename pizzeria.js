function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizzaOven = {};
        pizzaOven.crustType = crustType,
        pizzaOven.sauceType = sauceType,
        pizzaOven.cheese = cheese,
        pizzaOven.topping = toppings;
        return pizzaOven;
   
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarela"], ["peperoni", "sausage"]);
console.log(p1);
// console.log(pizzaOven());
var p2 = pizzaOven("hand tossed","marinara",["mozzarela","feta"],["mushrooms","olives","onions"]);
console.log(p2);
var p3= pizzaOven ("thin and crispy", "tomato", ["sausage","extra cheese"], ["bacon","mushrooms"]);
console.log (p3);
var p4 = pizzaOven("thin and crispy","marinara",["bacon","mozzarela","peperoni"],["pesto","olives"]);
console.log(p4);

function randomRange(max,min){
  return Math.floor( Math.random( max - min))+ min;
}
function randomPick(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());
