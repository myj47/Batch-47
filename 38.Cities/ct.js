function describe_city(city, countary) {
    if (countary === void 0) { countary = "Pakistan"; }
    return ("".concat(city, " is in ").concat(countary));
}
console.log(describe_city("Lahore"));
console.log(describe_city("Karachi"));
console.log(describe_city("Tokyo", "Japan"));
