import Device from "./device.js";
class Iphone extends Device {
    constructor(manufacturer, screenSize) {
        super(manufacturer);
        this.screenSize = screenSize;
    }
}
export default Iphone;
