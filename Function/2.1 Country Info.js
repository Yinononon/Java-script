// 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’
// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// // variables, and log them to the console.

function countryInfo (country, population, capitalCity) {
   return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

console.log(countryInfo("Israel","9.5 milion","Jerusalem"));
console.log(countryInfo("Greece","10.5 milion","Athnes"));
console.log(countryInfo("Italy","59 milion","Rome"));

const israel = countryInfo("Israel","9.5 milion","Jerusalem");
const greece = countryInfo("Greece","10.5 milion","Athnes");
const italy = countryInfo("Italy","59 milion","Rome");

console.log(israel)
console.log(greece)
console.log(italy)