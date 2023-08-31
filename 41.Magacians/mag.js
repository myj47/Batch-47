"use strict";
const mag = ["Alpha", "Bravo", "Charlie", "Tom", "Jerry"];
function show_magacian(mag) {
    for (let i = 0; i < mag.length; i++) {
        console.log(mag[i]);
    }
}
show_magacian(mag);
function make_great(mag) {
    for (let i = 0; i < mag.length; i++) {
        mag[i] += " the Great";
    }
}
make_great(mag);
show_magacian(mag);
