import Instruments from "./instruments.js";
class Piano extends Instruments {
    constructor(model, manufacturer, color, numOfKeys, length) {
        super(model, manufacturer, color);
        this.numOfKeys = numOfKeys;
        this.length = length;
    }
    display() {
        super.display();
        console.log("Number of Keys: " + this.numOfKeys);
        console.log("Length: " + this.length);
    }
    makeSound() {
        console.log("Piano make sound...");
    }
    test() {
        console.log("Testing a piano....");
    }
    tune() {
        console.log("Tuning a Piano...");
    }
}
export default Piano;
