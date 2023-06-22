import Book from "./book.js";

const firstBook = new Book("Harry Potter", "Dany" , "Yedithot", 150 );
const secondBook = new Book("Kofiko", "Miri" , "Maariv", 70 );
const thirdBook = new Book("Morning", "Moshe" , "Yedithot", 30 );

firstBook.display();
secondBook.display();
thirdBook.display();

const vatBook1 = firstBook.vat()
console.log("VAT of first Book = " + vatBook1);

const vatBook2 = secondBook.vat()
console.log("VAT of second Book = " + vatBook2);

const vatBook3 = thirdBook.vat()
console.log("VAT of third Book = " + vatBook3);
