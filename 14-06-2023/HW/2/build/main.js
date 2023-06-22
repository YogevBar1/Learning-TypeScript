// function showPrimeBetweenTwoNumber(num1, num2) {
//     for (let i = num1; i <= num2; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= i; j++) {
//             if (i % j === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime)
//             document.write(i + " , ");
//     }
// }
function showPrimeBetweenTwoNumber(num1, num2) {
    let result = "";
    for (let i = num1; i <= num2; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += i + " , ";
        }
    }
    document.getElementById("result").textContent = result;
}
const num1 = +prompt("Insert first number");
const num2 = +prompt("Insert second number");
showPrimeBetweenTwoNumber(num1, num2);
