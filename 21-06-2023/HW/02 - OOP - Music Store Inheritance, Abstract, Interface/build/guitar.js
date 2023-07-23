import Instruments from "./instruments.js";
class Guitar extends Instruments {
    constructor(model, manufacturer, color, numOfString) {
        super(model, manufacturer, color);
        this.numOfString = numOfString;
    }
    display() {
        super.display();
        console.log("Number Of stings: " + this.numOfString);
    }
    makeSound() {
        console.log("Guitar make sound...");
    }
}
export default Guitar;
