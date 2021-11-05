var priceL = 1;
var priceR = 2;
var score = 0;
var correct = true;

function testLeft(){
    if (correct){
        if (priceL > priceR){
            var dot = document.getElementById("correct");
            dot.style.left = "25%";
            dot.style.display="block";
            increaseScore();
            setTimeout(()=>{dot.style.display="none";}, 1200);
        }
        else {
            var dot = document.getElementById("incorrect");
            dot.style.left = "25%";
            dot.style.display="block";
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
            dot.style.right = "25%";
            dot.style.display="block";
            increaseScore();
            setTimeout(()=>{dot.style.display="none";}, 1200);
        }
        else {
            var dot = document.getElementById("incorrect");
            dot.style.right = "25%";
            dot.style.display="block";
            endGame();
            setTimeout(()=>{dot.style.display="none";}, 1200);
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
