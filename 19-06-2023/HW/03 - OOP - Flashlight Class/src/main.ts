import Flash from "./flash.js";

const flash1 = new Flash("Yellow", 14 , 34, 2);
const flash2 = new Flash("Black", 5 , 3, 3);

flash1.turnOn();
flash1.turnOf();
flash1.changeBattery();
flash1.display();

console.log("----------");

flash2.turnOn();
flash2.turnOf();
flash2.changeBattery();
flash2.display();

