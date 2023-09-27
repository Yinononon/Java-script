/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/

// From function declarations to explicit and implicit.
// return functions (one of each);

// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }

// IIFE:
((welcome) => {
    const sen = 'Welcome to Appleseeds Bootcamp!'
    console.log(sen)
})();
// implicit:
const welcome2 = () => 'Welcome to Appleseeds Bootcamp!';
// explicit:
const welcome3 = () =>{
    return 'Welcome to Appleseeds Bootcamp!';
}

// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }


// // From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;