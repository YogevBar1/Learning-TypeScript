
logValue<number>(12);
// logValue<number>("hey"); //Error
logValue<string>("Hi");
logValue<Date>(new Date());


function logValue<T>(value: T): void{ //T=Type, G= generics
    if(!value)
        console.log("Missing Value");
    else
        console.log(value);
        
        
}