import Vehicle from "./vehicle.js";

class PrivateCar extends Vehicle {

    public seats: number;

    public constructor( manufacturer : string, model : string, color : string, num : number, seats: number){
        super(manufacturer, model , color, num);    //Calling the constructor of our base class (super class);
        this.seats = seats;
    }

    public display():void{

        super.display();
        console.log("Seats: " + this.seats);
        
    }
}

export default PrivateCar;