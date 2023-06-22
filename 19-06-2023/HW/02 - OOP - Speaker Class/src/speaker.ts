class Speaker{
    public color: string;
    public volume: number;

    public constructor(color:string, volume: number){
        this.color = color;
        this.volume = volume;
    }

    public turnOn():void{
        console.log( "The speaker turn on");
        
    }

    public turnOf():void{
        console.log("The speaker turn of");
        
    }

    public makeVois():void{
        console.log("Speaker make vois...");
        
    }

    public display():void{
        console.log("Color : "+ this.color);
        console.log("volume : "+ this.volume);
        
    }


}

export default Speaker;