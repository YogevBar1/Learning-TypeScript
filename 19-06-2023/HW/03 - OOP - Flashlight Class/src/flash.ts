class Flash {
    public color: string;
    public length: number;
    public lightPower: number;
    public batteryNum: number;

    public constructor(color: string, length: number, lightPower: number, batteryNum: number) {
        this.color = color;
        this.length = length;
        this.lightPower = lightPower;
        this.batteryNum = batteryNum;
    }

    public turnOn():void{ 
        console.log("Flash turn on");
        
    }

    public turnOf():void{ 
        console.log("Flash turn of");
        
    }

    
    public changeBattery():void { 
        console.log("Batterys changed");
        
    }

    public display():void{
        console.log("Color: " + this.color);
        console.log("Length: " + this.length);
        console.log("Light power: " + this.lightPower);
        console.log("Battery num: " + this.batteryNum);

    }


}

export default Flash;