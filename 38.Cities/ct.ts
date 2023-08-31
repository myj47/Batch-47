function describe_city(city:string,countary:string="Pakistan"){
return(`${city} is in ${countary}`);
}
console.log(describe_city("Lahore"));
console.log(describe_city("Karachi"));
console.log(describe_city("Tokyo","Japan"));

