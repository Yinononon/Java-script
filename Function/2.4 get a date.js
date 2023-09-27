let currentDate = new Date();

console.log(currentDate)


function stringDate(numDate) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    console.log(`Today is ${daysOfWeek[numDate.getDay()]} the ${(numDate.getDate())} of ${months[numDate.getMonth()]}  ${(numDate.getFullYear())}`)

}

stringDate(currentDate)