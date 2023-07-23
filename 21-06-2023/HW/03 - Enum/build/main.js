import Color from "./color.js";
const color1 = Color.Yellow;
const color2 = Color.Blue;
const color3 = Color.Red;
const color4 = Color.Green;
const color5 = Color.White;
console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);
console.log(color5);
console.log("-----");
const result1 = getColorItem(color1);
console.log(result1);
const result2 = getColorItem(color2);
console.log(result2);
const result3 = getColorItem(color3);
console.log(result3);
const result4 = getColorItem(color4);
console.log(result4);
const result5 = getColorItem(color5);
console.log(result5);
function getColorItem(color) {
    switch (color) {
        case Color.Yellow:
            return "Banana";
        case Color.Red:
            return "Fire";
        case Color.Blue:
            return "Sea";
        case Color.Green:
            return "WaterMelon";
        case Color.White:
            return "Snow";
        default:
            return "Unknown";
    }
}
