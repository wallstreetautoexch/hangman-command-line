var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ["eldorado", "markiv", "mustang", "porsche", "gmcmotorhome", "ranchero", "gremlin", "pacer", "rollsroyce", "chrysler"];

var wordToPlay = words[Math.floor(Math.random()*words.length)];

var counter = 0;
var remainingGuesses = wordToPlay.length * 2;
var wordCurrentStatus = "";
var winOrLoseSwitch = 0;

console.log(" Init Remaining Guesses = " + remainingGuesses)




console.log("***************************************************************************");
console.log("*                        Welcome To Car Hangman                           *");
console.log("*                                                                         *");
console.log("*                   Each Word Generated Will Be The Name                  *");
console.log("*                            Of A Classic Car                             *");
console.log("*                                                                         *");
console.log("*                   The Number of Guesses You Get Will Be                 *");
console.log("*                      Twice The Length Of The Car Name                   *");
console.log("*                                                                         *");
console.log("***************************************************************************");
console.log("");
console.log("");


var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());

console.log("");
console.log("");

function determineWinorLose () {
 winOrLoseSwitch = 0
 wordCurrentStatus.split("");

 for (i=0; i < wordCurrentStatus.length; i++) 
      {
        if (wordCurrentStatus[i] == "_")
        {
         winOrLoseSwitch = 1   
        }
      }
  if (winOrLoseSwitch == 0)
     {
      console.log("******************Winner At The Last Guess !!!!!! ********************")
     }
  else
     {
      console.log("***************** You Lose You Lose You Lose !!!! ********************")
     }
};


function determineGameOverOrNot () {

winOrLoseSwitch = 0;
wordCurrentStatus.split("");

 for (i=0; i < wordCurrentStatus.length; i++) 
      {
        if (wordCurrentStatus[i] == "_")
        {
         winOrLoseSwitch = 1   
        }
      }
  if (winOrLoseSwitch == 1)
     {
      console.log("");
      console.log("");  
      console.log(" ***********Display Totals Game Not Over ***************")
      console.log("Guesses =     " + counter)
      console.log("Remaining Guesses = " + remainingGuesses)
      console.log("");
      console.log("");
     }
  else
     {
      console.log("");
      console.log("");  
      console.log(" ***********Display Totals Game Over  *******************")
      console.log("");
      console.log(""); 
      console.log(" ***********YOU WIN !!!!! YOU WIN !!! *******************")
      console.log("");
      console.log(""); 
      console.log("Guesses =     " + counter)
      console.log("Remaining Guesses = " + remainingGuesses)
      console.log("");
      console.log("");

     }   
};



function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess? If you are done then type beepbeep "},
    ]).then(function(data){
        if (data.guess != 'beepbeep') {
            wordObject.updateLetter(data.guess);
            counter ++
            remainingGuesses = remainingGuesses - 1
            wordCurrentStatus = wordObject.display()
            console.log("");
            console.log("");
            console.log(wordCurrentStatus)   
            // console.log(wordObject.display());
            console.log("");
            console.log("");
            if (remainingGuesses == 0)
               {
                determineWinorLose ()
                console.log("");
                console.log("");
                console.log(" ***********Display Totals Game Over ***************")
                console.log("Guesses =     " + counter)
                console.log("Remaining Guesses = " + remainingGuesses)
                console.log("");
                console.log("");

               }
            else
               {
                determineGameOverOrNot () 
                if (winOrLoseSwitch == 1)
                   {    
                    askLetter();
                   }
                }
        }
        else
           {
         console.log("");
         console.log("");
         console.log("************* You Exited the Game !! ******************")
           }
       
    });
}

askLetter();