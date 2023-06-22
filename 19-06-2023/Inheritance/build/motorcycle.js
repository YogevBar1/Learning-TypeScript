import Vehicle from "./vehicle.js";
class Motorcycle extends Vehicle {
    constructor(manufacturer, model, color, num, CanAssembled) {
        super(manufacturer, model, color, num); //Calling the constructor of our base class (super class);
        this.CanAssembled = CanAssembled;
    }
    display() {
        super.display();
        console.log(this.CanAssembled ? "Can carry" : "Can not carry");
    }
}
export default Motorcycle;
