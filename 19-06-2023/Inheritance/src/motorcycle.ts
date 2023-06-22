


import Vehicle from "./vehicle.js";

class Motorcycle extends Vehicle {

    public CanAssembled: boolean;

    public constructor( manufacturer : string, model : string, color : string, num : number, CanAssembled: boolean){
        super(manufacturer, model , color, num);    //Calling the constructor of our base class (super class);
        this.CanAssembled = CanAssembled;
    }

    public display():void{

        super.display();
        console.log(this.CanAssembled ? "Can carry" : "Can not carry");
        
    }
}

export default Motorcycle;