/*
Creator: Brianna Schladweiler
Date created: January 12, 2020
Date last modified: January 15, 2020
*/
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["luckySevens"]["startBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["luckySevens"]["startBet"].focus();
}

function playLuckySevens() {
    clearErrors();
    var startBet = document.forms["luckySevens"]["startBet"].value;
    var newBet = startBet;
    var totalRolls = 0;
    var highestBet = 0;
    var rollOfHighestBet = 0;
    var newBetsArray = [];
    if (startBet == "" || startBet <= 0 || isNaN(startBet)) {
        alert("Starting Bet must be filled in with a positive number.");
        document.forms["luckySevens"]["startBet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["startBet"].focus();
        return false;
    }
    while (newBet > 0) {
        var rollDice1 = Math.floor(Math.random() * 6) + 1;
        var rollDice2 = Math.floor(Math.random() * 6) + 1;
        var diceTotal = rollDice1 + rollDice2
        totalRolls += 1;
        switch (diceTotal) {
            case 7:
                newBet = (Number(newBet) + 4);
                /* used to verify in console each newBet amount after a win:
                console.log("win " + newBet); */
                break;
            default:
                newBet = (Number(newBet) - 1);
                /* used to verify in console each newBet amount after a loss:
                console.log("loss " + newBet); */ 

        }newBetsArray.push(Number(newBet));

    }
    /* used to verify in the console that newBets were being added to newBetsArray correctly: 
    console.log(newBetsArray) */
    var highestBet = Math.max.apply(Math, newBetsArray);
    var rollOfHighestBet = (newBetsArray.indexOf(highestBet) + 1);
    /* used to verify in the console that highestBet was actually recognizing the highest number in the array:
    console.log(highestBet);*/
    /* used to verify in the console that rollOfHighestBet was truly recognizing the index of the highest number in newBetsArray:
    console.log(rollOfHighestBet);*/
    /* used to verify in the console that the totalRolls variable was recognizing the correct number of rolls (double checking no rolls were being missed):
    console.log(newBetsArray.length);*/

   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("originalBet").innerText = "$" + Number(startBet) + ".00";          
   document.getElementById("totalRolls").innerText = totalRolls;
   document.getElementById("highestBet").innerText = "$" + highestBet + ".00";
   document.getElementById("rollOfHighestBet").innerText = rollOfHighestBet;
   /* I am returning false so that the form doesn't submit 
   and also so we can see the results */
   return false;
}