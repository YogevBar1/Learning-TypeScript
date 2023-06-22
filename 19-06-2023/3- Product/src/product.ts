class Product {

    public name: string;
    public description: string;
    public price: number;
    public discount: number;
    public static readonly vat = 1.17;



    public constructor(name: string, description: string, price: number, discount: number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
    }

    public display(): void {
        console.log("Product Name: " + this.name);
        console.log("Product description: " + this.description);
        console.log("Product price: " + this.price);
        console.log("Product discount: " + this.discount);

    }

    public getPriceWithVat(): number {
        return (this.price * Product.vat);
    }


}

export default Product;