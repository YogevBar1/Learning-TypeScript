import PrivateCar from "./private-car.js";
import Truck from "./truck.js";
import Motorcycle from "./motorcycle.js";
import Boat from "./boat.js";
const car = new PrivateCar("Lamborgini", "Diablo", "Yellow", 2666503, 3);
car.display();
const truck = new Truck("VOLVO", "Semi trailer", "Black", 31324234, 344);
truck.display();
const motorcycle = new Motorcycle("aaa", "WOOO", "White", 324324, true);
motorcycle.display();
const boat = new Boat("Mano", "Dan", "Green", 3243423, 324);
boat.display();
// const someVehicle = new Vehicle("Bimba", "YYY" , "Yellow" , 1234); //Error
// someVehicle.display();
