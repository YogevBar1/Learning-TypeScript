class Kitten {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    toString() {
        let result = "Name: " + this.name;
        result += ", Age " + this.age;
        result += ", Color: " + this.color;
        return result;
    }
}
export default Kitten;
