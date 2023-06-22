import Car from "./car.js";

class RaceCar extends Car{
    public maxSpeed: number;
    public howManyRaceHistory: number;

    public constructor(carNumber: number, manufacturer: string , model: string, color: string ,engineCapacity: number ,maxSpeed: number,howManyRaceHistory: number ){
        super(carNumber, manufacturer, model,color,engineCapacity);
        this.maxSpeed = maxSpeed;
        this.howManyRaceHistory = howManyRaceHistory;
    }

    public display(): void {
        super.display();
        console.log("Max Speed = " + this.maxSpeed);
        console.log("Race history = " + this.howManyRaceHistory);
        
    }

}

export default RaceCar;