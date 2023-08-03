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
