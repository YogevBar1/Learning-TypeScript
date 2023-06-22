import Car from "./car.js";
class RaceCar extends Car {
    constructor(carNumber, manufacturer, model, color, engineCapacity, maxSpeed, howManyRaceHistory) {
        super(carNumber, manufacturer, model, color, engineCapacity);
        this.maxSpeed = maxSpeed;
        this.howManyRaceHistory = howManyRaceHistory;
    }
    display() {
        super.display();
        console.log("Max Speed = " + this.maxSpeed);
        console.log("Race history = " + this.howManyRaceHistory);
    }
}
export default RaceCar;
