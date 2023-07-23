import Instruments from "./instruments.js";
class Drum extends Instruments {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    display() {
        super.display();
        console.log("Diameter: " + this.diameter);
    }
    makeSound() {
        console.log("Drum make sound...");
    }
}
export default Drum;
