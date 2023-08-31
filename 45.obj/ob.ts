interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
  }
  
  function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    
    args.forEach(arg => {
      const [key, value] = Object.entries(arg)[0];
      car[key] = value;
    });
  
    return car;
  }
  
  
  const carInfo = createCar("Toyota", "Camry", { color: "blue" }, { optionalFeature: "sunroof" });
  
  console.log(carInfo);
  