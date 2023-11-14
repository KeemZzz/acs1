// this function will be called by a button click; it will start our game
function playCraps(){
 console.log("playCraps function called");

 // first roll of the dice
 var die1 = rollDie();
 console.log("The first die roll is: " +die1);

 // second roll of the dice
 var die2 = rollDie();
 console.log("The second die roll is: " +die2);

 //add the die rolls together
 var sum = die1 + die2;
 console.log("The sum off the die rolls is " + sum);

 //show results of the first die roll on the HTML page
 outputRes("die1Res", "Die 1 is: " + die1);

 //show results of the second die roll on the HTML page
 outputRes("die2Res", "Die 2 is: " + die2);

///show results of the sum on the HTML page
 outputRes("SumRes", "The sum is: " + sum);

 // the logic if we won. lost or tied
 if(sum == 7 || sum == 11){
   outputRes("crapsRes", "You lose!");
 }
  // if the dice equal each other, and they are even
  else if(die1 == die2 && die2 % 2 == 0){
      // You win
      outputRes("crapsRes", "You win!");
  }
  // the catch all - the dice roll was a tie
  else{
    outputRes("crapsRes", "You pushed( you tied)!");
  }
}
// Output our game results
function outputRes(htmlElement, theText){
    //use the html element to show results
    document.getElementById(htmlElement).innerHTML = theText;
}

//this function will generate a random numbet between 1 and 6
function rollDie(){
    var die = 6 * Math.random();
    // return the die roll and make sure it is a whole number
    return Math.ceil(die)
}