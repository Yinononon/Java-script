// let x = Math.floor(Math.random()*50)+1;
// console.log(x);
// let userNum = false;

// while(!userNum){
//     let userNum = parseInt(prompt('Enter your guess (between 1 50)'), 2);
//     if (x === userNum){
//         console.log("Good!")
//         userNum = true;
//     }
//     else if( userNum > x ){
//         console.log("hige number")
//     }
//     else{
//         console.log("low Number")
//     }
// }


// const randomNumber = Math.floor(Math.random() * 51);
// console.log(randomNumber);
// let promptVar = prompt("please guess a number between 0 and 50");
// while (promptVar !== randomNumber) {
// if (promptVar > randomNumber) {
//   console.log("guess is too high, try again");
//   promptVar = prompt("please guess again");
//  } else {
//     console.log("guess is too low, try again");
//     promptVar = prompt("please guess again");
//  }  
// }
// console.log("Congratulations! You guessed the correct number.");

const targetNumber = Math.floor(Math.random() * 51); 
let guessed = false;

while (!guessed) {
  const userGuess = parseInt(prompt('Enter your guess (between 0 50)'), 10);

  if (isNaN(userGuess)) {
    console.log(' enter a number');
  } else if (userGuess === targetNumber) {
    alert(' You guessed the correct number');
    guessed = true;
  } else if (userGuess < targetNumber) {
    console.log('Too low! Try again');
  } else {
    console.log('Too high! Try again');
  }
}