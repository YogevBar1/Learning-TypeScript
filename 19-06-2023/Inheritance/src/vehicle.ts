abstract class Vehicle{
    public manufacturer : string;
    public model : string;
    public color : string;
    public num : number;

    public constructor( manufacturer : string, model : string, color : string, num : number){
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.num = num;
    }

    public display():void{
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color );
        console.log("Number: " + this.num);
        
    }
}

export default Vehicle;