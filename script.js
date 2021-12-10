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
"https://m.media-amazon.com/images/I/919uTjYIa0L._AC_UY218_.jpg",
"https://m.media-amazon.com/images/I/61UoOLRoDvL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71Vc654iRCL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/51DLiSZDiJL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61qyHf360RL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61UoxmLzH0L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91sdrYs-O5L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91te5noLa-L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/712bqju7gAS._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91SvDEfN8GL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/510X2X4nVyL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/715tpQl1bKL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/51pv4fdJljS._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81YPGxmr5VL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81wy7-GTP2L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61+zj3hagnL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61dMj+mPSXL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81Kb5TVBQvL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/817YPdmbxJL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61AxmGz5HES._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61ix1lvC6WL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91lc8FOJW0L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81zfu9hNdRS._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81Hk+ygGWdL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71F6tT1HkOL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81OqSTy+A1L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81WgjPv16rL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91EtS35sCoL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/413RakkCwmL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/910FawX1sLL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71AmxEgl7AL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61RFdQ7tZKL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71BPqGqS1EL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71X5-rqXIjL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81cK-2KYJ5L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/713++LVA6HL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61-JH6iDFaL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71A26MVNQKL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71FqUswYV8L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91vDWIb86WL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71qE6eH2ktL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/81xDaW7tGHL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/61V45-gwBHL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71va85V7q2L._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/51yIBRx39hS._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/91NBmupECHL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71N93z7AHOL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/41347J59TBL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/914fkDL5FrL._AC_UL320_.jpg",
"https://m.media-amazon.com/images/I/71cWEHLM9TL._AC_UL320_.jpg",
];

var items = ["Apple iPhone 8 64GB",
"MacBook Air Laptop: Apple M1 Chip 13 Retina Display 8GB RAM 256GB SSD Storage",
"SAMSUNG 65-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV",
"Apple 13.3 inches MacBook Air with Retina Display Intel Core i5 8th Gen Dual-Core 8GB RAM 128GB SSD",
"Amazon Basics Wireless Computer Mouse with USB Nano Receiver",
"Audeze LCD-3 Over Ear Open Back Headphone Zebrano Wood Rings with New Suspension Headband",
"Xbox One S 500GB Console",
"Call Of Duty: Vanguard",
"FIFA 22",
"Amazon Basics 3 Speed Small Room Air Circulator Fan",
"Amazon Basics Matte Black Wired Keyboard",
"Organic Chemistry as a Second Language",
"Ninja BL610 Professional 72 Oz Countertop Blender with 1000-Watt Base",
"Stand Mixer Rozi 660W 6-Speed Tilt-Head Food Mixer",
"Amazon Basics Microwave Small",
"ORIbox Case Compatible with iPhone 11",
"Living Enrichment Mini Fridge Chilling and Warming",
"TI-Nspire CX II CAS Color Graphing Calculator",
"Alienware m15 R4 RTX 3070 Gaming Laptop Full HD (FHD) 15.6 inch - Intel Core i7-10870H 16GB DDR4 RAM 1TB SSD NVIDIA GeForce RTX 3070 8GB GDDR6",
"SAMSUNG 23.5 CF396 Curved Computer Monitor",
"Echo Dot (4th Gen)",
"Echo Show 8 (2nd Gen 2021 release)",
"Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones",
"SWISSGEAR 5358 ScanSmart Laptop Backpack",
"Snugababies Unicorn Kitty Cat Stuffed Animals for Girls",
"Gerber Purees 2nd Foods Chicken & Gravy 2.5 Ounce Jars (Pack of 20)",
"Nike Club Fleece Crew Men's Sweatshirt Crewneck",
"Ling's moment Artificial Wedding Arch Flowers Kit(Pack of 3)",
"Mora Ceramic Dinner Plates Set of 6 10 inch Dish Set",
"Dusico Balloons Rainbow Set (100 Pack) 12 Inches",
"Simple Joys by Carter's",
"Earth's Best Organic Baby Formula Dairy Based Powder Infant Formula with Iron Non-GMO Omega-3 DHA and Omega-6 ARA 32 oz",
"The Gruffalo",
"Phil Foden Jersey",
"Lionel Messi Argentina Kit",
"Bernardo Silve Portugel Jersey",
"Yeokou Women's sweater",
"Black Forest Gummy Bears Candy 6 Lb",
"SonicBrite Professional Strength Plastic Artificial Eye Cleaning System Plus Free Scoop and Plush Travel Bag",
"Nike Men's Air Monarch IV Cross Trainer",
"Natures Valley Granola Bars Crunchy Oats N Honey",
"Melissa & Doug Burrow Bunny Rabbit Stuffed Animal (9 inches)",
"Umite Chef Water Bottle Vacuum Insulated Wide Mouth Stainless-Steel Sports 18-64OZ",
"100 Vintage Football Cards in Old Sealed Wax Packs",
"Pokemon TCG: 3 Booster Packs  30 Cards Total",
"Sven & Son Split King Essential Adjustable Bed Base Frame + 14 Luxury Cool Gel Memory Foam Hybrid Mattress",
"Amazon Basics Gaming Computer Desk with Storage for Controller Headphone & Speaker",
"Ariana Grande Cloud Eau de Parfum Spray clear 3.4 oz",
"LEGO Bonsai Tree 10281 Building Kit",
"Amazon Basics Expandable Metal Hanging Storage Organizer Rack Wardrobe with Shelves 14-63 x 58-72",
"Amazon Basics Rolling Laundry Hamper Cart Converts into Dolly 36 inch Handle Height",
"Funko Pop Rocks: Music - Justin Bieber Toy Figure",
"Nike Joel Embiid Sixers Jersey",
"Syma S107/S107G R/C Helicopter with Gyro- Red",
"DEERC D20 Mini Drone for Kids with 720P HD FPV Camera Remote Control",
"Adams Brooks Whirly Pop Lollipop",
"WILSON Adult Recreational Tennis Rackets",
"MEEDEN 72-Piece Acrylic Painting Set with Beech Wood Tabletop Easel",
"joybest Halloween Decoration 8 FT Long Inflatable 7 Pumpkins Patch Lanterns with Black Cat with Build-in LEDs",
"CLEVAST 1500 Sq. Ft Energy Star 22 Pints Dehumidifier with Reusable Air Filter",
"adidas Stephen Curry Warriors Jersey",
"Leaead Reading Glasses BluErase Lens Cat Eye Anti-Blue Light Glasses",
"Car Emergency Safety Kit Bag",
"30 Pick Set Black HandleHousehold Kit Professional Picking Black Handle",
"Coquimbo Sewing Kit for Traveler Adults Beginner Emergency DIY Sewing Supplies",
"Jumbo Snorlax Plush Toy 30cm",
"Potalay Santa Costume",
"Generic Nightstand Set of 2 LED Nightstand with 2 Drawers",
"Ultra Rare Pokemon Bundle 50 Cards",
"Anley Fly Breeze 3x5 Foot Pennsylvania State Flag",
"Valley Forge Delaware State Flag",
"Annin Flagmakers Vermont State Yard Flag",
"VIPPER American Flag 3x5 FT Outdoor",
];

var prices = [215.00,
    899.00,
    847.99,
    736.99,
    12.19,
    1945.00,
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
    2091.27,
    189.99,
    34.99,
    94.99,
    248.00,
    129.99,
    34.99,
    33.65,
    61.20,
    79.99,
    49.99,
    10.99,
    15.19,
    37.99,
    4.99,
    129.99,
    44.99,
    27.99,
    29.99,
    13.99,
    34.95,
    80.91,
    19.90,
    10.79,
    12.99,
    19.95,
    13.93,
    1897.00,
    70.49,
    56.50,
    40.99,
    79.99,
    49.49,
    44.88,
    109.99,
    21.99,
    68.99,
    19.99,
    119.00,
    49.95,
    38.59,
    209.99,
    49.99,
    14.99,
    84.99,
    36.99,
    8.99,
    17.99,
    99.90,
    272.90,
    28.99,
    5.95,
    23.05,
    27.99,
    19.99,
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
            setTimeout(()=>{text.style.backgroundColor="#faff69";}, 1200);
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
            setTimeout(()=>{text.style.backgroundColor="#faff69";}, 1200);

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
            setTimeout(()=>{text.style.backgroundColor="#faff69";}, 1200);
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
            setTimeout(()=>{text.style.backgroundColor="#faff69";}, 1200);
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
