
import Instruments from "./instruments.js";
import Guitar from "./guitar.js";
import Drum from "./drum.js";
import Piano from "./piano.js";

const firstGuitar = new Guitar ("x-3" , "Spain" , "Red", 5);
firstGuitar.display()
firstGuitar.makeSound();

console.log("----------");

const firstDrum = new Drum("Y-6", "Franch", "White",15);
firstDrum.display();
firstDrum.makeSound();

console.log("----------");

const firstPiano = new Piano("z-5", "Israel","Black", 54,65 );
firstPiano.display();
firstPiano.makeSound();
firstPiano.test();
firstPiano.tune();