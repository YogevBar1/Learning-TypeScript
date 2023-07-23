// Create an Enum named Color that describes a list of five colors.
// Create a function called getColorItem that accepts an argument of the Enum type you built.
// The function must return the name of an item with the color received as an argument.
// For example, if we pass to the Color.Blue function, we can return "Sky" or some other item that has a blue color.
// For example, if we pass to the Color.White function, we can return "Snow" or some other item that has a white color.
var Color;
(function (Color) {
    Color["Yellow"] = "Yellow";
    Color["Red"] = "Red";
    Color["Blue"] = "Blue";
    Color["Green"] = "Green";
    Color["White"] = "White";
})(Color || (Color = {}));
export default Color;
