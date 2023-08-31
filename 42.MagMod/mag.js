const mag = ["Alpha", "Bravo", "Charlie", "Tom", "Jerry"];
function show_magacian(mag) {
    for (let i = 0; i < mag.length; i++) {
        console.log(mag[i]);
    }
}
function make_great(mag) {
    for (let i = 0; i < mag.length; i++) {
        const updmag = mag[i];
        mag[i] = `${mag[i]} the Great`;
    }
}
show_magacian(mag);
make_great(mag);
show_magacian(mag);
export {};
