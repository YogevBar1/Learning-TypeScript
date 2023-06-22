import Vehicle from "./vehicle.js";
class PrivateCar extends Vehicle {
    constructor(manufacturer, model, color, num, seats) {
        super(manufacturer, model, color, num); //Calling the constructor of our base class (super class);
        this.seats = seats;
    }
    display() {
        super.display();
        console.log("Seats: " + this.seats);
    }
}
export default PrivateCar;
