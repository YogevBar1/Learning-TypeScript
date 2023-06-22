


import Vehicle from "./vehicle.js";

class Truck extends Vehicle {

    public weight: number;

    public constructor( manufacturer : string, model : string, color : string, num : number, weight: number){
        super(manufacturer, model , color, num);    //Calling the constructor of our base class (super class);
        this.weight = weight;
    }

    public display():void{

        super.display();
        console.log("weight: " + this.weight);
        
    }
}

export default Truck;