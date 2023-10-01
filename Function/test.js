// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers

function isUniq(arr) {
    for(let i = 0; i < arr.length; i++){
        const number = arr[i];
        if(arr.indexOf(number) === arr.lastIndexOf(number)){
            return number;
        }
    }
    return "No unique number in the array"
}

console.log(isUniq([1,1,1,2,2,1]));