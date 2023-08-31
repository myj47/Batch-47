function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love typescript!"; }
    return ("The size of the shirt is ".concat(size, " , ").concat(text));
}
;
console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Any"));
