const kelvin = 0;
//weather forecast for today in Kelvin

const celsius = kelvin - 273;
//conversion to degrees celsius

let fahrenheit = celsius * (9/5) +32;
fahrenheit = Math.floor(fahrenheit);
//conversion to degrees fahrenheit

console.log(`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)