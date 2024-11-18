 for (let i=1; i<=20; i++) {
    if (i%2 === 0) {
        console.log (i);
    }
 }

 const targetNumber = Math.floor(Math.random() * 10) + 1;
 let userGuess = null;
 while (userGuess !== targetNumber) {
    userGuess = parseInt(prompt("Guess number from 1 to 10:"), 10);
    if (userGuess === targetNumber) {
        alert("you won");
    }
    else {alert("False! Try again");
        
    }
 }