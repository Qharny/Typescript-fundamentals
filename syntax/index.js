var a;
var b;
var c;
var e;
e = [1, "Kofi", true, 4.42];
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Orange"] = 2] = "Orange";
    color[color["Yellow"] = 3] = "Yellow";
    color[color["Green"] = 4] = "Green";
    color[color["Blue"] = 5] = "Blue";
    color[color["Indigo"] = 6] = "Indigo";
    color[color["violet"] = 7] = "violet";
})(color || (color = {}));
var bgColor = color.Indigo;
console.log(bgColor);
