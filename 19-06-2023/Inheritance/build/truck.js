import Vehicle from "./vehicle.js";
class Truck extends Vehicle {
    constructor(manufacturer, model, color, num, weight) {
        super(manufacturer, model, color, num); //Calling the constructor of our base class (super class);
        this.weight = weight;
    }
    display() {
        super.display();
        console.log("weight: " + this.weight);
    }
}
export default Truck;
