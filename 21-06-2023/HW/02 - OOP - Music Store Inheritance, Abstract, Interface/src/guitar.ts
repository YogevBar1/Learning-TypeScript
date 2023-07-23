import Instruments from "./instruments.js";

class Guitar extends Instruments{
    public numOfString : number;

    public constructor(model: string, manufacturer: string, color: string, numOfString : number){
        super(model, manufacturer , color);
        this.numOfString = numOfString;
    }

    public display(): void {
        super.display();
        console.log("Number Of stings: " + this.numOfString);
        

    }

    public makeSound():void{
        console.log("Guitar make sound...");
        
    }

    
}

export default Guitar;