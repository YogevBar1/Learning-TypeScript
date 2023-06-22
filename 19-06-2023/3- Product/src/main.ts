
import Product from "./product.js";

const shirt = new Product("T-Shirt" , "small T-shirt , green" , 45, 10);
const pc = new Product("PC- laptop" , "250GB, 25PX" , 4500, 100);

shirt.display();
pc.display();

const firstPriceIncludeVat = shirt.getPriceWithVat();
console.log("Price include vat =" + firstPriceIncludeVat);

const secondPriceIncludeVat = pc.getPriceWithVat();
console.log("Price include vat =" + secondPriceIncludeVat);