var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x', 'y', 'z'];

        var userPickedLetters = [];
        var userWins = 0;
        var userLosses = 0;
        var userRemainingGuesses = 9;
        var compRandomLetter = "";

        document.getElementById('headerWins').innerHTML = "Win: " + userWins;
        document.getElementById('headerLosses').innerHTML = "Lose: " + userLosses; 
        document.getElementById('headerGuesses').innerHTML = "Press any key to begin" + userPickedLetters; 
        document.getElementById('headerGuessesRemaining').innerHTML = "Left: " + userRemainingGuesses;  

        //get a random index number from alphabet array
        function getCompRandomLetter(){
          var compRandomLetterIndex = Math.floor(Math.random() * alphabet.length);
          //assigns random index chosen to a single character
          var returnLetter = alphabet[compRandomLetterIndex];
          return returnLetter;
        }
        compRandomLetter = getCompRandomLetter();

        document.onkeypress = function(event){
          //get user input
          var userLetter = String.fromCharCode(event.keyCode).toLowerCase();
          document.getElementById('headerGuesses').innerHTML = userLetter;

            //define user win
            if((userLetter == compRandomLetter) && ( userRemainingGuesses > 0)){

              userWins++;
              userRemainingGuesses = 9;

              document.getElementById('headerWins').innerHTML = "Win: " + userWins;
              document.getElementById('headerGuessesRemaining').innerHTML = "Left: " + userRemainingGuesses; 

              var html = "<audio src='images/alad-canttakeit.wav' type='audio/wav' autoplay></audio>";
              document.getElementById('compVoice').innerHTML = html; 

              compRandomLetter = getCompRandomLetter();
            }
            //defines an incorrect guess
            else{
              userRemainingGuesses--;
              document.getElementById('headerGuessesRemaining').innerHTML = "Left: " + userRemainingGuesses; 
            }
            //defines a computer win
            if(userLetter != compRandomLetter && userRemainingGuesses == 0){
              userLosses++;
              userRemainingGuesses = 9;

              document.getElementById('headerLosses').innerHTML = "Lose: " + userLosses;
              
              var html = "<audio src='images/alad-believe.wav' type='audio/wav' autoplay></audio>";
              document.getElementById('compVoice').innerHTML = html; 

              document.getElementById('headerGuessesRemaining').innerHTML = "Left: " + userRemainingGuesses;

              compRandomLetter = getCompRandomLetter();
            }
        }