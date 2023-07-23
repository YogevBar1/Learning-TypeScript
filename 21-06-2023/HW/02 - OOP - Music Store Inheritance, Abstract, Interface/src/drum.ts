import Instruments from "./instruments.js";

class Drum extends Instruments{
    public diameter: number;

    public constructor(model: string, manufacturer: string, color: string, diameter: number){
        super(model, manufacturer, color);
        this.diameter = diameter;
    }

    public display(): void {
        super.display();
        console.log("Diameter: " + this.diameter);
        
    }

    public makeSound():void{
        console.log("Drum make sound...");
        
    }
}

export default Drum;