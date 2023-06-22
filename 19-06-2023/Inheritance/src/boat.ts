


import Vehicle from "./vehicle.js";

class Boat extends Vehicle {

    public length: number;

    public constructor( manufacturer : string, model : string, color : string, num : number, length: number){
        super(manufacturer, model , color, num);    //Calling the constructor of our base class (super class);
        this.length = length;
    }

    public display():void{

        super.display();
        console.log("length : " + this.length);
        
    }
}

export default Boat;