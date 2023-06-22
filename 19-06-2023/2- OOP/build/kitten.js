class Kitten {
    //Methods:
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Color: " + this.color);
        console.log("ChipCode: " + this.chipCode);
        console.log("Average Life Span: " + Kitten.averageLifeSpan);
    }
    eat(food) {
        console.log(`${this.name} is eating ${food}`);
    }
    // constructor
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.chipCode = Math.floor(Math.random() * 1000000);
    }
    static showHelp() {
        alert("A kitten is a cute animal...");
    }
}
Kitten.averageLifeSpan = 15;
export default Kitten;
