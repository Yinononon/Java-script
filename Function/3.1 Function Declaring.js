/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions

// function welcome() {
// let welcome = 'Welcome to Appleseeds Bootcamp!';
// return welcome;
// }

const welcome =  () => 'Welcome to Appleseeds Bootcamp!';
    
// function power(a) {
// let myNumber = a;
// let result = Math.pow(myNumber, 2);
// return result;
// }

const power = function (a) {
    return a*a
}

// function add(a, b = 5) {
// let myNumber = a;
// let sum = myNumber + b;
// return sum;
// }

const add = (a, b = 5) => (a+b);

// From function expressions to function declarations:

// const hello = () => "Hello!";

function hello() {
    return "Hello!";
}

// const squareRoot = a => Math.sqrt(a);

function squareRoot(a) {
    let myNumber = a;
    let result = Math.sqrt(myNumber);
    return result;
}

// const randomNumbers = (a, b) => Math.random() * (a - b) +
// b;

function randomNumbers(a,b) {
    let subtraction = (a-b);
    let result = Math.random() * subtraction -b;
    return result
}
