var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pl = ["Dubai", "Italy", "Canada", "Egypt", "Peru"];
console.log(pl);
console.log(__spreadArray([], pl, true).sort());
console.log(pl);
console.log(__spreadArray([], pl, true).reverse());
console.log(pl);
console.log(pl.sort());
console.log(pl.sort().reverse());
