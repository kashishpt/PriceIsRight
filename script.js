var priceL = 3;
var priceR = 2;
var score = 0;
var correct = true;
var shown = false;

function testLeft(){
    if (correct){
        if (priceL > priceR){
            var dot = document.getElementById("correct");
            dot.style.display="block";
            dot.style.right = "50.5%"
            increaseScore();
            setTimeout(()=>{dot.style.display="none";}, 1200);
        }
        else {
            var dot = document.getElementById("incorrect");
            dot.style.display="block";
            dot.style.right = "50.5%"
            setTimeout(()=>{dot.style.display="none";}, 1200);
            setTimeout(()=>{endGame();}, 1200);
            correct = false;
        }
    }
}

function testRight(){
    if (correct){
        if (priceR > priceL){
            var dot = document.getElementById("correct");
            dot.style.display="inline";
            dot.style.left = "50.5%"
            increaseScore();
            setTimeout(()=>{dot.style.display="none";}, 1200);
        }
        else {
            var dot = document.getElementById("incorrect");
            dot.style.display="block";
            dot.style.left = "50.5%";
            setTimeout(()=>{dot.style.display="none";}, 1200);
            setTimeout(()=>{endGame();}, 1200);
            correct = false;
        }
    }
}

function endGame(){
    var playAgain = confirm("You lost!\nAn iPhone is $" + priceL + " while a TV is $" + priceR + "\nScore: " + score + "\nPress \"Ok\" to play again");
    if (playAgain){
        score = -1;
        increaseScore();
        correct = true;
    }
}

function increaseScore(){
    var scoreLabel = document.getElementById("score");
    score++;
    scoreLabel.textContent="Score: " + score;
}

function showInstructions(){
    var instructions = document.getElementById("instructions");
    if (shown){
        instructions.style.display="none";
    }
    else{
        instructions.style.display="inline";
    }
    shown = !shown;
}
