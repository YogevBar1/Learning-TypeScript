class Vehicle {
    constructor(manufacturer, model, color, num) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.num = num;
    }
    display() {
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Number: " + this.num);
    }
}
export default Vehicle;
