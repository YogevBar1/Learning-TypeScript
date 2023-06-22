logValue(12);
// logValue<number>("hey"); //Error
logValue("Hi");
logValue(new Date());
function logValue(value) {
    if (!value)
        console.log("Missing Value");
    else
        console.log(value);
}
