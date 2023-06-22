console.log("test");
// Type variable
let age;
age = 20;
// Union Type:
let value;
value = 20;
value = "Hello";
value = true;
let kitten;
kitten = { name: "Oscar", age: 4 };
// kitten = 123 ; Error
// kitten = {name: "Oscar" , age: "Hi"}; Error
// kitten: {name: "Oscar" , age: number, color :"Black"}; Error
// kitten ={name: "Oscar"}; Error
// Array type:
let grades;
grades = [90, 98, 100, 87];
// Functions:
function doWork(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    return true;
}
function doSomething(a, b) {
    console.log(a);
    console.log(b);
}
const flag = doWork(12, "HI", new Date());
// Use JS moduldle
import { sum, avg } from "./calc.js";
console.log(sum(10, 20));
console.log(avg(10, 20));
import printing from "./printing.js";
import displaySmiley from "./smiely.js";
printing.printMsg("HI");
printing.printDate();
displaySmiley();
