// Ex6.1 - Mumbling;
function accum(str) {
let letters = str.split('') ;
let  words = [];
for (let i = 0; i < str.length; i++) {
    words.push(letters[i].toUpperCase())
    
    for (let j = 0; j < i; j++) {
        words.push(letters[i].toLowerCase())
        
    }
    
}

return words.join('')
}
console.log(accum('aDeg'))