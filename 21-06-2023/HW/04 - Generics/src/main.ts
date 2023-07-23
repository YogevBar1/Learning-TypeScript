import Backup from "./backup.js";
import Kitten from "./Kitten.js";

const firstBackup = new Backup("bla bla bla", "Todo");
const secondBackup = new Backup("Buy Fish", 55);
const thirdBackup = new Backup("Play", true);

const currentDate = new Date;
const fourBackup = new Backup("Eat",currentDate );

const myCat = new Kitten("Mitsi", 11, "Yellow");
const fiveBackup = new Backup("Buy a cat",myCat);

firstBackup.display();
secondBackup.display();
thirdBackup.display();
fourBackup.display();
fiveBackup.display();



