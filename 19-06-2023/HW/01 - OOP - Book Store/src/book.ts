class Book{
    public name: string;
    public writer: string;
    public expenditure: string;
    public price: number;

    public constructor(name: string, writer: string, exexpenditure: string , price: number){
        this.name = name;
        this.writer = writer;
        this.expenditure = exexpenditure;
        this.price = price;

    }

    public display():void{
        console.log("Name: " + this.name);
        console.log("Writer: " + this.writer);
        console.log("Expenditure: " + this.expenditure);
        console.log("Price: " + this.price);
        
    }

    public vat():number{
        return (this.price * 0.17);
    }

}

export default Book;