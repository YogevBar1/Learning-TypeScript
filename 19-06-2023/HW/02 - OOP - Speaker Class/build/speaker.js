class Speaker {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    turnOn() {
        console.log("The speaker turn on");
    }
    turnOf() {
        console.log("The speaker turn of");
    }
    makeVois() {
        console.log("Speaker make vois...");
    }
    display() {
        console.log("Color : " + this.color);
        console.log("volume : " + this.volume);
    }
}
export default Speaker;
