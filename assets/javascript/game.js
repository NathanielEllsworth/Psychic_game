

$(document).ready(function () {

    //I want a 5 character string composed of characters picked randomly from the set [a-zA-Z0-9].
    //What's the best way to do this with JavaScript?

                //  0    1    2
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        guessesMade = [],
        wins = 0,
        losses = 0,
        guessesLeft = 9,
        computerGuess = "";


    //Take and store user entry
    document.onkeyup = function (event) {
        var userGuess = event.key;


        //Generate computer guess
        if (guessesLeft === 9) {
            computerGuess = letters[Math.floor(Math.random() * letters.length)];   //random generator
            console.log('computer guess ' + computerGuess);
        }


        //check validity of user entry and remove entered letters from letters array
        var checker = letters.indexOf(userGuess);

        if (checker >= 0) {
            letters.splice(letters.indexOf(userGuess), 1);


            //If User and computer match add a win and reset guesses left
            if (userGuess === computerGuess) {
                wins++;
                guessesLeft = 9;
                guessesMade = [];
                letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



            //If User doesn't match computer guesses left -1 and store
            //guesses in array guesses made
            } else {
                guessesLeft--;
                guessesMade.push(userGuess);

            }


            //If user has no guesses set guesses left to 9, add 1 loss clear array
            if (guessesLeft === 0) {
                guessesLeft = 9;
                losses++;
                guessesMade = [];
                letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            }

        }


        //If the user doesn't enter one of the 26 letters an error will appear
        else {
            alert("Please enter a valid key");
        }


        document.getElementById("win").innerHTML = wins;
        document.getElementById("loss").innerHTML = losses;
        document.getElementById("guessesRemaining").innerHTML = guessesLeft;
        document.getElementById("guessesUsed").innerHTML = guessesMade;
        console.log("losses: " + losses);
        console.log("guesses left " + guessesLeft);
        console.log("Guesses Made: " + guessesMade);
        console.log("wins: " + wins);
    }

});





