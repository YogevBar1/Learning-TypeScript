class Flash {
    constructor(color, length, lightPower, batteryNum) {
        this.color = color;
        this.length = length;
        this.lightPower = lightPower;
        this.batteryNum = batteryNum;
    }
    turnOn() {
        console.log("Flash turn on");
    }
    turnOf() {
        console.log("Flash turn of");
    }
    changeBattery() {
        console.log("Batterys changed");
    }
    display() {
        console.log("Color: " + this.color);
        console.log("Length: " + this.length);
        console.log("Light power: " + this.lightPower);
        console.log("Battery num: " + this.batteryNum);
    }
}
export default Flash;
