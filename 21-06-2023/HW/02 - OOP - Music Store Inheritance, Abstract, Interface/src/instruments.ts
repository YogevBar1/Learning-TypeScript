abstract class Instruments {
    public model: string;
    public manufacturer: string;
    public color: string;


    public constructor(model: string, manufacturer: string, color: string) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
    }




    public display(): void {
        console.log("Model: " + this.model);
        console.log("manufacturer: " + this.manufacturer);
        console.log("color: " + this.color);
    }
    
    public abstract makeSound(): void;

}

export default Instruments;