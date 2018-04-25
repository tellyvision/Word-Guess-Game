$(document).ready(function() {
    $("#game").hide();
    });
    
    var clueBank = ["Okami", "Main in Streetfighter", "Female Character in Streetfighter", "Devil May Cry", "Megaman's Counterpart", "Darkstalkers"];
    var wordBank = ["amaterasu", "ryu", "chunli", "dante", "zero", "morrigan"];
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wordDisplay = [];
    var wordLetters = []
    var lettersGuessed=[];
    var guessesLeft = 15;
    var randomWord;
    var clue;
    
    //randomWord and associated clue is generate from workBank
    wordBankIndex = Math.floor(Math.random()*wordBank.length);
    randomWord = wordBank[wordBankIndex];
    clue = clueBank[wordBankIndex];
    //each letter of randomWord is created into an index of wordLetters array
    wordLetters = randomWord.split("");
    
    //when start button is pressed, button is hidden and game is shown
    $("body").on("click", "#startBtn", function() {
      $("#startBtn").hide();
      $("#game").show();
    });
    
    //word is displayed as dashes
    for (var i=0; i < wordLetters.length; i++) {
      wordDisplay.push("_ ")
    }
    $("#wordDisplay").text(wordDisplay.join(" "))
    
    //when a key is pressed
    $("#game").keyup(function(event) {
      //sets user input variable
      var userInput = event.key.toLowerCase();
      //loops with wordLetters array 
      for (var i=0; i < wordLetters.length; i++) {
        //if userInput == wordLetters, and is available in alphabetArray, it will replace the dash in wordDisplay with the user input letter and added to lettersGuessed
          if (wordLetters[i] == userInput && alphabetArray.includes(userInput)) {
          wordDisplay[i] = userInput;
          lettersGuessed.push(userInput)
          }
    
        }
    
      //code to take userInput out of alphabetArray
      //added to array of already guess letters
      for (var i=0; i < wordLetters.length; i++) {
      lettersGuessed.push(userInput)
    }
    });
    
    //click on clue button for a clue
    $("body").on("click", "#clueBtn", function() {
      $("#clue").text(clue);
    });
    
    
    //lose is number of guesses is 0