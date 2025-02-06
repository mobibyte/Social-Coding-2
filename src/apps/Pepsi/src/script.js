//The gateway. Assign a name, then get the ID of an element on the HTML side.
//In turn, this will allow the value to be manipulated.
const banana_button = document.getElementById("bananaButton");
const display_score = document.getElementById("counting");
const display_price = document.getElementById("price");
const consumeBanana = document.getElementById("eatBanana");
const upgrade1 = document.getElementById("upgradeClick");
const upgrade2 = document.getElementById("addFarmer");
const upgrade3 = document.getElementById("quoteChange");
const quote = document.getElementById("bananaQuote");
const upgrade4 = document.getElementById("changeImage");

//Global variables for the functions to access.
let score = 0;
let increase = 0;
let upgradePrice = 10;
let addedWorker = 0;

//These are needed in order to listen for specific events.
//In this case, it listens for the "Click" event and goes to their assigned function
banana_button.addEventListener("click", button_function);
consumeBanana.addEventListener("click", eatBanana);
upgrade1.addEventListener("click", clickIncrease);
upgrade2.addEventListener("click", buyFarmer);
upgrade3.addEventListener("click", changeQuote);
upgrade4.addEventListener("click", changeImage);


function button_function() { //Main part of the website. Click to gain function
    // Debug statements
    // console.log("Clicked!");
    // console.log("Score from display == " +score)

    score++;
    if (increase > 0) {
        score = score + increase;
    } 

    display_price.innerHTML = 0;
    display_score.innerHTML = score;        
}

function eatBanana() { //decrement by 1 functiono. Or "Eat"
    if (score != 0) { 
        score = score - 1;
        display_score.innerHTML = score;

        console.log("Banana Consumed")
    }
    display_price.innerHTML = 1;
}

function clickIncrease() { //upgrade 1. Upgrade your clicking rate.
    if (score >= upgradePrice) {
        increase = increase + 1; //Increase the click rate by 1
        score = score - upgradePrice; //Subtract the price
        upgradePrice = upgradePrice + 2; //Price rises by 2 for every item brought

        display_price.innerHTML = upgradePrice;

    } else {
        display_price.innerHTML = upgradePrice;
    }
    display_score.innerHTML = score;

}

function buyFarmer() { //upgrade 2. Get a worker to assist your banana harvesting.
    if (score >= 50) {
        addedWorker++;
        score = score - 50;
        console.log("Workers == " +addedWorker);
        if(addedWorker == 1) { //Reason why it == 1 is because it only needs to initialize ONCE.
            setInterval(autoClicker, 2000);
        }
    } 
    display_price.innerHTML = 50;
    display_score.innerHTML = score;
}

function autoClicker() { //Actual functionality of upgrade 2
    score = score + (addedWorker * 5)
    
    display_score.innerHTML = score;
}

function changeQuote() { //upgrade 3. Changes the quote.
    if (score >= 1500) {
        let newQuote = ("Bananas or not to Bananas?");
        quote.innerHTML = newQuote;
    } 
    display_price.innerHTML = 1500;
}

function changeImage() { //upgrade 4. Changes the image.
    if (score >= 15000) {
        banana_button.src = "/Images/squished-banana.png"
    }
    display_price.innerHTML = 15000;
}