import Kitten from "./kitten.js";

Kitten.showHelp();


const myFirstKitten = new Kitten("Mitsi" , 4, "Yellow");


myFirstKitten.display();
myFirstKitten.sleep();
myFirstKitten.eat("Ketly");
myFirstKitten.name ="Boss";
// myFirstKitten.chipCode=1432; //Error

// console.log(myFirstKitten.chipCode); // Error

console.log("First Color cat: " +myFirstKitten.color);
// myFirstKitten.color ="Brown"; //Error



console.log("--------------------------------------");


const mySecondKitten = new Kitten("Kitsi" , 14, "Black");


mySecondKitten.display();
mySecondKitten.sleep();
mySecondKitten.eat("Bonzo");

