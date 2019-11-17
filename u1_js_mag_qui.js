var playerHand = 0; //declared variable player hand, starts with zero value
var computerHand = 0; //declared variable computer hand, starts with zero value
var dealerCard = 0; //declared card from dealer, starts with zero value
window.addEventListener("keydown", mainGame, false); //activates listener for keyboard input and gives instructions to start mainGame on keydown

/**
 * @desc starts new game, add one card to player, two to computer and checks if computer gets 21 = computer wins or 22 = player wins
 */

(function newGame(){
    addCardToPlayerHand(); //calls function which adds one card to player hand
    addCardToComputerHand(); //calls function which adds one card to computer hand
    addCardToComputerHand();
    checInstantkWinning(); //calls function which checks if someone (only possible for computer here) gets 21 = instant win or 22 = instant loss
})()

/**
 * @desc starts on keyboard input from player, 'd' draws one new card for player, 's' stops dealer and gives computer one card if hand is <17. Each choice tries instant win/loss
 */
function mainGame(event) {
    if (event.code === 'KeyD') { //if key D is pressed: add one card to player and call on following functions
        addCardToPlayerHand(); //calls function which adds one card to player hand
        checInstantkWinning(); //calls function to try if player gets 21 = instant win or 22 = instant loss
    }
    else if (event.code === 'KeyS') { //if key S is pressed: player invokes stop, if computer hand is less than 17, computer gets one additional card
        if (computerHand < 17){ //if computerHand is less than 17, call on function
            addCardToComputerHand(); //calls function which adds one card to computer hand
        }
        checInstantkWinning(); //calls function which checks if someone (only possible for computer) gets 21 = instant win or 22 = instant loss
        checkWinning(); //calls function which determines game outcome; if player/computer wins or it´s a draw
    }
};

/**
 * @desc draws a card with random value from 1 to 11
 * @param number dealerCard - value of random card given by function
 */

function getRandomDealerCard(){
    dealerCard = Math.floor(Math.random() * 11) + 1; //gives random value from 1 to 11
    return dealerCard; //value is returned by function
}

/**
 * @desc calls function getRandomDealerCard, logs value, adds it to playerHand, logs player´s score
 * @param number playerHand - value of dealerCard is added
 */

function addCardToPlayerHand (){
    getRandomDealerCard(); //call on function to get random card
    console.log("player drew " + dealerCard); //logs card value and text
    playerHand += dealerCard;
    console.log("player score = " + playerHand); //logs score and text
}

/**
 * @desc calls function getRandomDealerCard, logs value, adds it to computerHand, logs computer´s score
 * @param number computerHand - value of dealerCard is added
 */

function addCardToComputerHand (){
    getRandomDealerCard(); //call on function to get random card
    console.log("computer drew " + dealerCard); //logs card value and text
    computerHand += dealerCard;
    console.log("computer score = " + computerHand); //logs score and text
}

/**
 * @desc alerts player of loss, prints hands for computer and player, second alert with request to refresh page for new game
 */

function computerWinsAlert(){
    alert("Haha you loose!\n\nComputer score: "+ computerHand + "\n\nPlayer score: " + playerHand);
    alert("Please refresh page to play again! :)")
}

/**
 * @desc alerts player of win, prints hands for computer and player, second alert with request to refresh page for new game
 */

function playerWinsAlert(){
    alert("Congratulations you win!\n\nComputer score: "+ computerHand + "\n\nPlayer score: " + playerHand);
    alert("Please refresh page to play again! :)")
}

/**
 * @desc alerts draw, prints hands for computer and player, second alert with request to refresh page for new game
 */

function drawAlert(){
    alert("It is a Draw!\n\nComputer score: "+ computerHand + "\n\nPlayer score: " + playerHand);
    alert("Please refresh page to play again! :)")
}

/**
 * @desc checks if player/computer gets 21 = instant win or >21 = instant loss 
 */

function checInstantkWinning(){
    if (computerHand >21 || playerHand == 21){
        playerWinsAlert(); //call on function which alerts player on winning, second alert with request to refresh page for new game
    }
    else if (playerHand >21 ||computerHand == 21){
        computerWinsAlert(); //call on function which alerts player on loss, second alert with request to refresh page for new game
    }
}

/**
 * @desc checks result and calls on function equivalent to three possible outcomes: player/computer wins or a draw
 */

function checkWinning(){
    if (playerHand == computerHand){
        drawAlert(); //call on function which alerts a draw, second alert with request to refresh page for new game
    }
    else if (playerHand > computerHand){
        playerWinsAlert(); //call on function which alerts player on winning, second alert with request to refresh page for new game
    }
    else{
        computerWinsAlert(); //call on function which alerts player on loss, second alert with request to refresh page for new game
    }
}