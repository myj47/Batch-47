function make_shirt(size:string="Large",text:string="I love typescript!"){
    return(`The size of the shirt is ${size} , ${text}`)
};
console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Any"));