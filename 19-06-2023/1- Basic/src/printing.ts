function printMsg(msg: string): void{
    console.log(msg );
}

function printDate(): void{
    const now = new Date();

    console.log(now.toLocaleDateString() );

}

export default{
    printMsg,
    printDate
};