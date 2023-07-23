class Kitten{
    public name: string;
    public age: number;
    public color: string;

    public constructor(name:string, age:number , color: string) { 
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public toString(): string{
        let result ="Name: " + this.name;
        result += ", Age " + this.age ;
        result += ", Color: " + this.color ;
        return result;

    } 

}

export default Kitten;