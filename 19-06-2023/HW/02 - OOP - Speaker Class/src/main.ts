import Speaker from "./speaker.js";

const speaker1= new Speaker("Yellow", 25);
const speaker2 = new Speaker ("Black", 15);

speaker1.turnOn();
speaker1.turnOf();
speaker1.makeVois();
speaker1.display();

console.log("----------");

speaker2.turnOn();
speaker2.turnOf();
speaker2.makeVois();
speaker2.display();

