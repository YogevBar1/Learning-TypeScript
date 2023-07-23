import Instruments from "./instruments.js";
import Tester from "./tester.js";

class Piano extends Instruments implements Tester{
    public numOfKeys: number;
    public length: number;

    public constructor(model: string, manufacturer: string, color: string, numOfKeys: number, length: number){
        super(model, manufacturer,color);
        this.numOfKeys = numOfKeys;
        this.length = length;

    }

    public display(): void {
        super.display();
        console.log("Number of Keys: " + this.numOfKeys);
        console.log("Length: " + this.length);
        
        
    }

    public makeSound():void{
        console.log("Piano make sound...");
        
    }

    public test(): void {
        console.log("Testing a piano....");
        
    }

    public tune(): void {
        console.log("Tuning a Piano...");
        
    }
}

export default Piano;