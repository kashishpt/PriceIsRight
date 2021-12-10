var score = 0; //game score
var correct = true;
var shown = false;
var indexLeft = -1;
var indexRight = -1;

//lists of item info
var images = ["https://m.media-amazon.com/images/I/61-LFcsxvwL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/51WJPUmlXAL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/51-9oSG8jAL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/81VzAC1f8EL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61fxifrQybL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/41SlJU8UZ3L._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61IRkFrvi0L._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/81U06MS2NiL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/81cg9myC9kL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61k3g-ykBoL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/71JiarXg4eS._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/51ngf55JmfL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/712ayvAg4QL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/51o5avEi7ML._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61c8jg5GogL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/71Hx1SjCFIL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/71b9icxgIgL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/51yQll2L7xL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61fxifrQybL._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/919uTjYIa0L._AC_UY218_.jpg",
]
;

var items = ["iPhone 8 64GB",
"2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”",
"SAMSUNG 65-Inch Class - 4K Smart TV",
"13.3 inches MacBook Air with Retina Display, Intel Core i5 8th Gen Dual-Core",
"Amazon Basics Wireless Computer Mouse",
"Audeze LCD-3 Over Ear Open Back Headphone",
"Xbox One S 500GB Console",
"Call Of Duty: Vanguard",
"FIFA 22",
"Amazon Basics 3 Speed Small Room Air Circulator Fan",
"Amazon Basics Matte Black Wired Keyboard",
"Organic Chemistry as a Second Language",
"Ninja BL610 Professional 72 Oz Countertop Blender",
"Stand Mixer, Rozi 660W 6-Speed Tilt-Head Food Mixer",
"Amazon Basics Microwave",
"Case Compatible with iPhone 11",
"Living Enrichment Mini Fridge Chilling and Warming, Portable Compact Refrigerator",
"TI-Nspire CX II CAS Color Graphing Calculator",
"Alienware m15 R4 RTX 3070 Gaming Laptop Full HD ",
"SAMSUNG 23.5” CF396 Curved Computer Monitor",
"Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue",
"Echo Show 8 (2nd Gen, 2021 release)",
"Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic",
"Xbox One S 500GB Console",
"SWISSGEAR 5358 ScanSmart Laptop Backpack",
]
;
var prices = [215.00,
    899.00,
    847.99,
    736.99,
    12.19,
    1,945.00,
    509.95,
    74.93,
    29.88,
    14.94,
    11.11,
    25.35,
    88.99,
    129.99,
    74.99,
    13.99,
    39.99,
    141.92,
    2,091.27,
    189.99,
    34.99,
    94.99,
    248.00,
    509.95,
    129.99,
    ];
var used = new Array(items.length);


/* 
Called when starting/restarting game
*/
function newGame(){
    score = -1;
    increaseScore();
    correct = true;

    for (let i = 0; i < used.length; i++){
        used[i] = false;
    }

    indexLeft = shuffleIndex();
    indexRight = shuffleIndex();
    var left = document.getElementById("left-item-description");
    var righ = document.getElementById("right-item-description");
    
    left.style.display = "block";
    left.innerText = items[indexLeft];
    document.getElementById("left-item-image").src=images[indexLeft];
    
    righ.style.display = "block";
    righ.innerText = items[indexRight];
    document.getElementById("right-item-image").src=images[indexRight];

}



/*
Called when user chooses left item
*/
function testLeft(){
    if (correct){

        //case where user is correct
        if (prices[indexLeft] >= prices[indexRight]){
            var text = document.getElementById("left-item-description");
            text.style.backgroundColor = "#77e06c";
            setTimeout(()=>{text.style.backgroundColor="transparent";}, 1200);
            increaseScore();

            var itemName = document.getElementById("right-item-description");
            indexRight = shuffleIndex();
            itemName.textContent = items[indexRight];
            document.getElementById("right-item-image").src=images[indexRight];
        }

        //case where user is incorrect
        else {
            var text = document.getElementById("left-item-description");
            text.style.backgroundColor = "#ff6052";
            setTimeout(()=>{text.style.backgroundColor="transparent";}, 1200);

            setTimeout(()=>{endGame(indexRight, indexLeft);}, 1200);
            correct = false;
        }
    }
}

/*
Called when user chooses right item
*/
function testRight(){
    if (correct){

        //case where user is correct
        if (prices[indexRight] >= prices[indexLeft]){
            var text = document.getElementById("right-item-description");
            text.style.backgroundColor = "#77e06c";
            setTimeout(()=>{text.style.backgroundColor="transparent";}, 1200);
            increaseScore();

            var itemName = document.getElementById("left-item-description");
            indexLeft = shuffleIndex();
            itemName.textContent = items[indexLeft];
            document.getElementById("left-item-image").src=images[indexLeft];
        }

        //case where user is incorrect
        else {
            var text = document.getElementById("right-item-description");
            text.style.backgroundColor = "#ff6052";
            setTimeout(()=>{text.style.backgroundColor="transparent";}, 1200);
            setTimeout(()=>{endGame(indexLeft, indexRight);}, 1200);
            correct = false;
        }
    }
}

/*
Displays loss message and allows user to play again
*/
function endGame(more, less){
    var playAgain = confirm(items[more] + " is $" + prices[more] + "\n" + items[less] + " is $" + prices[less] + "\nPress Ok to play again!");
    if (playAgain){
        newGame();
    }
}

/*
Increases the score in the event of a correct choice
*/
function increaseScore(){
    var scoreLabel = document.getElementById("score");
    score++;
    scoreLabel.textContent="Score: " + score;
    if (score == items.length){
        confirm("Congratulations! You've passed through every item in this game!");
        newGame();
    }
}

/* 
Shows the "How to play" screen after a user presses the how to play button
*/
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

/* 
Returns a random index from the items list of items that have not been used
*/
function shuffleIndex(){
    var index = Math.floor(Math.random() * items.length)
    if (used[index]){
        return shuffleIndex()
    }
    else {
        used[index] = true;
        return index;
    }
}
