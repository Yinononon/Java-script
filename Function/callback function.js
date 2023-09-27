// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.

function isString(callback,string) {
   
    if (typeof string === 'string') {
        return callback(string);
    }
}
function conLog(string) {
    console.log(string)
}

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase(string,callback) {
    const stringToArray = string.split(' ');
    const firstWord = stringToArray[0]
    stringToArray[0] = firstWord.toUpperCase();
    const newString = stringToArray.toString()
    return callback(newString);
}

 function dashes(string) {
    result = string.replace(/ /g,'-')
    return (result);
 }

//  3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice

function double(string) {
    return string +' ' +string
}
console.log(typeof(double))

// 4.Create your own function that will receive from one of its
// arguments a callback function.

function myFun(arg,test) {
    if (typeof arg === 'function') {
        return test(arg);
    }
}

function itsFun(fun) {
    console.log('Both argument are function')
}
