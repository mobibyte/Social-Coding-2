//Contains some examples on how you could create some rad functions for your website

//Gets the 'id' in the html document
const buttonChange = document.getElementById("button1");
const backpageButton = document.getElementById("button2");
const backpage = document.getElementById("background");
const textChange = document.getElementById("button3");
const rainbowText = document.getElementById("nyanText");
const captionChange = document.getElementById("button4");
const captionText = document.getElementById("caption");
const faceIt = document.getElementById("face");
const imageButton = document.getElementById("button5");
const image = document.getElementById("imageSpot");

//Listens for specified events
buttonChange.addEventListener("click", changeColor);
backpageButton.addEventListener("click", changeColor);
textChange.addEventListener("click", changeColor);
captionChange.addEventListener("click", changeCaption);
imageButton.addEventListener("mouseover", importImage);
imageButton.addEventListener("mouseleave", importImage);

//Global variable 
var colorCounter = 0;
var textCounter = 0;

//All purpose color Changing Function
function changeColor(event) {
    const clickedElement = event.target;
    console.log("Color Changed!");

    if(clickedElement.id === "button1") {
        buttonChange.style.backgroundColor = "red";
    }
    else if(clickedElement.id === "button2") {
        backpage.style.backgroundColor = "#62c2e3";
    }
    else if(clickedElement.id === "button3") {
        setInterval(RAINBOWS, 750);
    }
}

//Simple color changes from the setInterval
function RAINBOWS() {
    var colors = ["red", "green", "yellow", "blue"];
    rainbowText.style.color = colors[colorCounter];
    colorCounter = (colorCounter + 1)%colors.length;
}

//Changes the caption.
function changeCaption(){
    textCounter++
    switch(textCounter){
        case 1:
            captionText.innerHTML = "Hey stop that!";
            faceIt.innerHTML = ":|"
            break;
        case 2:
            captionText.innerHTML = "Quit it!";
            faceIt.innerHTML = ">:("
            break;
        case 3:
            captionText.innerHTML = "Don't do it...";
            faceIt.innerHTML = ">:|"
            break;
        case 4:
            captionText.innerHTML = "I'M WARNING YOU!!!";
            faceIt.innerHTML = "D:<"
            break;
        case 5:
            captionText.innerHTML = "IF YOU DO THAT ONE MORE TIME!!!!";
            faceIt.innerHTML = "D:<<"
            break;
        case 6:
            captionText.innerHTML = "*Sigh* why are you so mean to me";
            faceIt.innerHTML = ":'("
            textCounter = 0
            break;   
        default:
            captionText.innerHTML = "Click some buttons below to change some things up!"; 
            break;
    } 
}

function importImage(event){
    switch(event.type) {
        case 'mouseover':
            image.src = "./lift-the-rock.jpg";
            break;
        case 'mouseleave':
            image.src = "./the-rock.jpg";
            break;
        default:
            image.src = "./the-rock.jpg";
            break;
    }
}
