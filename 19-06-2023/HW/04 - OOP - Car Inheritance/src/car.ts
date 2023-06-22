 class Car{
    public readonly carNumber: number;
    public readonly manufacturer: string;
    public readonly model: string;
    public color: string;
    public engineCapacity: number;

    public constructor(carNumber: number, manufacturer: string , model: string, color: string ,engineCapacity: number ){
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engineCapacity = engineCapacity;
    }

    public display(): void{
        console.log("Car number: " + this.carNumber);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
        console.log("Engine Capacity: " + this.engineCapacity);        
    }


}

export default Car;
