function isVaildPassword(password,username) {
    if (password.length < 8) {
        return false
    }
    if (password.indexOf(' ') !== -1) {
        return false
    }
    if (password.indexOf(username) !== -1) {
        return false
    }

}

function avg(arryavg) {
    let sum = 0;
    for (const element of arryavg){
        sum += element;
    }
    let res = sum/arryavg.length
    return res
}

function isPangram(sentenc) {
    // let lowSentenc = sentenc.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz' ){
        if (sentenc.toLowerCase().indexOf(char) === -1 ) {
            return false;
        }
    }
    return true;
}
console.log(isPangram('Waltz, bad nymph, for quick jigs vex'))