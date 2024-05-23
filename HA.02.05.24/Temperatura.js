function celsiusToFahrenheit(celsius) {
    var fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

// Testare cu o valoare de temperatură în Celsius
var temperaturaCelsius = 10;
var temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius + " grade Celsius sunt echivalente cu " + temperaturaFahrenheit + " grade Fahrenheit.");
