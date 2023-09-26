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
