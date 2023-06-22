import Vehicle from "./vehicle.js";
class Boat extends Vehicle {
    constructor(manufacturer, model, color, num, length) {
        super(manufacturer, model, color, num); //Calling the constructor of our base class (super class);
        this.length = length;
    }
    display() {
        super.display();
        console.log("length : " + this.length);
    }
}
export default Boat;
