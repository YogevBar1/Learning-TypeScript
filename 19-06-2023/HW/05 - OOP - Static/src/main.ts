import ArrayOperations from "./arrayOperations.js";

let arr=[];
for(let i =0 ; i<10; i++){
    arr[i] = Math.floor(Math.random()*1000);
}

console.log("Sum = " + ArrayOperations.getSum(arr));
console.log("Avg = " + ArrayOperations.getAvg(arr));
console.log("Max = " + ArrayOperations.getMax(arr));
console.log("Min = " + ArrayOperations.getMin(arr));

