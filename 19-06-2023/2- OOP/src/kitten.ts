class Kitten{

    //Data Members:
    public name: string;
    public age: number;
    public readonly color: string;
    private chipCode: number;
    public static readonly averageLifeSpan: number =15;


    //Methods:
    public sleep():void{
        console.log(`${this.name} is sleeping.`);
    }

    public display(): void{
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Color: " + this.color);
        console.log("ChipCode: " + this.chipCode);
        console.log("Average Life Span: " +Kitten.averageLifeSpan);
    }

    public eat(food: string): void{
        console.log(`${this.name} is eating ${food}`);
        
    }

    // constructor
    public constructor(name: string, age:number, color: string){
        this.name = name;
        this.age = age;
        this.color = color;
        this.chipCode = Math.floor(Math.random()*1000000);
    }

    public static showHelp(): void{
        alert("A kitten is a cute animal...");
    }


}

export default Kitten;