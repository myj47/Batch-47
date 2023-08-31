function createCar(manufacturer, model, ...args) {
    const car = {
        manufacturer,
        model,
    };
    // Add any additional properties to the car object
    args.forEach(arg => {
        const [key, value] = Object.entries(arg)[0];
        car[key] = value;
    });
    return car;
}
// Call the function with required and optional information
const carInfo = createCar("Toyota", "Camry", { color: "blue" }, { optionalFeature: "sunroof" });
console.log(carInfo);
export {};
