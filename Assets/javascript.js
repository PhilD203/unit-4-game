//define variables

var userNumber;  //matching winning number
var userScore;//current user value
var winCount;  // total user wins
var lossCount; // total user losses
var crystals = [0 , 0 , 0 , 0];  // value of crystals


//wire up on click events

$( document ).ready(function() {
    console.log( "ready!" );
    reset();
});

function reset(){
    console.log("reset");
    userNumber = 19 + Math.floor(Math.random() * 101);
    console.log(userNumber + "the random number maybe");
    
    userScore = 0;
    
    for(var i = 0; i < crystals.length; i++)
        crystals[i] = 1 + Math.floor(Math.random() * 12);
    console.log(crystals);

    $("#your-number").text(userNumber);
}

function crystalClick(crystalIndex){
    //Apply values of crystals from the array to the total score
    console.log("Crystal Value " + crystals[crystalIndex]);
    userScore = crystals[crystalIndex] + userScore;
    crystals[crystalIndex] = 1 + Math.floor(Math.random() * 12);
    validate();
    $("#total-title").text(userScore);
}

function validate(){
    if(userScore == userNumber){
        console.log("This is a winner");
        reset();
     $("#win-loss").text("You Win!");
    }
    else{
        if(userScore > userNumber){
        console.log( "No" , userScore , userNumber);
        $("#win-loss").text("You Lose");
        reset();

        }   
    }
}


