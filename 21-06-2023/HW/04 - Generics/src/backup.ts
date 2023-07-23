class Backup<T>{
    public subject: string;
    public value: T;

    public constructor(subject: string , value:T){
        this.subject = subject;
        this.value = value;
    }

    public display(): void{
        console.log("Subject: " + this.subject);
        console.log("Value: " + this.value);
    }
}

export default Backup;

