const arr = [0,0,0,0,0,0,0]
let unique = arr[0];
if ((arr[arr.length-1] !== arr[arr.length-2]) && (arr[arr.length-1] !== arr[arr.length-3] )) {
    unique = arr[arr.length -1]
}
else if (arr[arr.length-2] !== arr[arr.length-3] && arr[arr.length-2] !== arr[arr.length-4]){
    unique = arr[arr.length-2]
}
else{
for (let i = 0; i < arr.length -2; i++) {
    
    if (arr[i] !== arr[i+1]  &&  arr[i] !== arr[i+2]) {
        unique = arr[i]
    }
}    
}

console.log(unique)
console.log(arr[arr.length-1])