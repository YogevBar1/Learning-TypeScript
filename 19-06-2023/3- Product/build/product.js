class Product {
    constructor(name, description, price, discount) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
    }
    display() {
        console.log("Product Name: " + this.name);
        console.log("Product description: " + this.description);
        console.log("Product price: " + this.price);
        console.log("Product discount: " + this.discount);
    }
    getPriceWithVat() {
        return (this.price * 1.18);
    }
}
export default Product;
