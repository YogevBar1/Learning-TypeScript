class Book {
    constructor(name, writer, exexpenditure, price) {
        this.name = name;
        this.writer = writer;
        this.expenditure = exexpenditure;
        this.price = price;
    }
    display() {
        console.log("Name: " + this.name);
        console.log("Writer: " + this.writer);
        console.log("Expenditure: " + this.expenditure);
        console.log("Price: " + this.price);
    }
    vat() {
        return (this.price * 0.17);
    }
}
export default Book;
