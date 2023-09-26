/* -------------------------------------------------------------------------- */
/*                              Ex1.1 - Yes or No                             */
/* -------------------------------------------------------------------------- */
const yesOrNo = {
    bool: function (Boolean) {
        if (Boolean) {
            console.log('Yes')
        }else{
            console.log('No')
        }
        
}
}

/* -------------------------------------------------------------------------- */
/*                               Ex2.1 Yes or No                              */
/* -------------------------------------------------------------------------- */

function smallestElement(arr) {
    let smallestElement1 = arr[0];
    let smallestElement2 = arr[1];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement1) {
            smallestElement1 = arr[i];
        }
        } 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement2 && arr[i] > smallestElement1) {
            smallestElement2 = arr[i];
            }  
    }      
             
    return (smallestElement1 + smallestElement2)
}

/* -------------------------------------------------------------------------- */
/*                            Ex2.2 - One and Zero                            */
/* -------------------------------------------------------------------------- */

let n = 0
function binToDec(array) {
    for (let i = 0; i < array.length ; i++) {
        n = n + (array[i])*(Math.pow(2, -1 + array.length - i ))    
    }
    return n ;
}

/* -------------------------------------------------------------------------- */
/*                                Ex2.4 Unique                                */
/* -------------------------------------------------------------------------- */
// const arr = [0,0,0,0,0,0,0]
// let unique = arr[0];
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

/* -------------------------------------------------------------------------- */
/*                              Ex2.5 - Summation                             */
/* -------------------------------------------------------------------------- */
function summamtion(maxNum) {
    let sum = 0;
    for (let i = 1; i <= maxNum; i++) {
        sum = sum +i;
    }
    return sum
}

/* -------------------------------------------------------------------------- */
/*                         // Ex5.1 - trimming string:                        */
/* -------------------------------------------------------------------------- */
function triming(text) {
    text = text.slice(1, text.length -1);
    return text;
}
