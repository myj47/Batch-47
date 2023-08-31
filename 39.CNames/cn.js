function describe_city(city, countary) {
    if (city === void 0) { city = "Lahore"; }
    if (countary === void 0) { countary = "Pakistan"; }
    return ("\"".concat(city, ",").concat(countary, "\""));
}
console.log(describe_city());
console.log(describe_city("London", "UK"));
console.log(describe_city("Tehran", "Iran"));
