
let n = 0
function binToDec(array) {
    for (let i = 0; i < array.length ; i++) {
        n = n + (array[i])*(Math.pow(2, -1 + array.length - i ))    
    }
    return n ;
}
