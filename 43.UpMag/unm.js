var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of magician's names
var mag = ["Alpha", "Bravo", "Charlie", "Tom", "Jerry"];
function show_magicians(mag) {
    for (var i = 0; i < mag.length; i++) {
        console.log(mag[i]);
    }
}
function make_great(mag) {
    var modifiedMagicians = [];
    for (var i = 0; i < mag.length; i++) {
        modifiedMagicians.push("the Great " + mag[i]);
    }
    return modifiedMagicians;
}
console.log("Original Magician Names:");
show_magicians(mag);
var modifiedArray = make_great(__spreadArray([], mag, true));
console.log("\nModified Magician Names:");
show_magicians(modifiedArray);
