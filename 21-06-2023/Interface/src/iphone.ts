import Device from "./device.js";

class Iphone extends Device{
    public screenSize: number;

    public constructor(manufacturer: string, screenSize: number){
        super(manufacturer);
        this.screenSize = screenSize;
    }
}

export default Iphone;