

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


console.log(smallestElement([21,55,53,25,21]))