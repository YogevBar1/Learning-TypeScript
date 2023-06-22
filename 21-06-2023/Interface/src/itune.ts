import Device from "./device.js";
import Player from "./player.js";

class Itune extends Device implements Player{
    public capacity: number;
    public volume: number;

    public constructor(manufacturer: string, capacity: number){
        super(manufacturer);
        this.capacity = capacity;
    }
    public play(): void {
        console.log("Playing...");
        
    }
    public pause(): void {
        console.log("Pauing...");
        
    }
    public stop(): void {
        console.log("Stopping...");
        
    }
    
    
}

export default Itune;