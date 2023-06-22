import Device from "./device.js";
class Itune extends Device {
    constructor(manufacturer, capacity) {
        super(manufacturer);
        this.capacity = capacity;
    }
    play() {
        console.log("Playing...");
    }
    pause() {
        console.log("Pauing...");
    }
    stop() {
        console.log("Stopping...");
    }
}
export default Itune;
