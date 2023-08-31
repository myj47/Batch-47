function describe_city(city:string="Lahore",countary:string="Pakistan"){
    return(`"${city},${countary}"`);
    }
    console.log(describe_city());
    console.log(describe_city("London","UK"));
    console.log(describe_city("Tehran","Iran"));