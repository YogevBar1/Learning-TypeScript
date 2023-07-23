class Instruments {
    // public model: string;
    // public manufacturer: string;
    // public color: string;
    // public constructor(model: string, manufacturer: string, color: string) {
    //     this.model = model;
    //     this.manufacturer = manufacturer;
    //     this.color = color;
    // }
    constructor(model, manufacturer, color) { }
    display() {
        console.log("Model: " + this.model);
        console.log("manufacturer: " + this.manufacturer);
        console.log("color: " + this.color);
    }
}
export default Instruments;
