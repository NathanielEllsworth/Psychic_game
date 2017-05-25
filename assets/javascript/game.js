

//I want a 5 character string composed of characters picked randomly from the set [a-zA-Z0-9].
//What's the best way to do this with JavaScript?


var computerChoices = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c", ];

      document.onkeyup = function(event) {

        var userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


