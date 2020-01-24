var textbox = document.getElementById("textbox");
startGame();
var goButton = document.getElementById('goButton');
goButton.style.visibility = 'hidden';



//SCENE 1
var start = document.createElement("button");

function startGame() {
    welcome.innerText = 'Choose Your Destiny!'
    var start = document.createElement("button");
    start.className = 'startButton';
    start.innerHTML = "START";
    start.style.backgroundColor = 'white';
    textbox.style.display = "none";


    document.body.appendChild(start);

    start.addEventListener("click", function() {
        // welcome.style.visibility = 'hidden';
        start.style.visibility = 'hidden';
        scene2();
    });
}

//SCENE 2

function scene2() {
    goButton.style.visibility = 'visible';
    start.style.visibility = 'hidden';
    var player = document.getElementById('name').value;
    // var intro = document.getElementById('demo');
    console.log('hello ' + player);
    // scene3();
    if (!player == '') {
        scene3();
    } else {
        alert('Please enter name');
    }
}
// SCENE 3
function scene3() {
    var back = document.getElementById('back');
    var choice = document.getElementById('choice');
    var welcome = document.getElementById('welcome');
    welcome.innerText = 'Choose Your Pill:'
        // 1. Create RED button
    var red = document.createElement("button");
    red.innerHTML = "RED PILL";
    red.style.backgroundColor = 'red';
    goButton.style.visibility = 'hidden';
    // 2. Append somewhere
    document.body.appendChild(red);
    // 3. Add event handler
    red.addEventListener("click", function() {
        console.log("welcome");
        // welcome.style.visibility = 'hidden';
        red.style.visibility = 'visible';
        blue.style.visibility = 'hidden';
        choice.innerText = 'YOU HAVE CHOOSEN THE RED PILL';
        textbox.style.display = "none";
        redPill();

    });

    // 1. Create BLUE button
    var blue = document.createElement("button");
    blue.innerHTML = "BLUE PILL";
    blue.style.backgroundColor = 'blue';
    // 2. Append somewhere
    document.body.appendChild(blue);
    // 3. Add event handler
    blue.addEventListener("click", function() {
        console.log("welcome");
        // welcome.style.visibility = 'hidden';
        blue.style.visibility = 'visible';
        red.style.visibility = 'hidden';
        choice.innerText = 'YOU HAVE CHOOSEN THE BLUE PILL';
        textbox.style.display = "none";
        bluePill();

    });
}


//SCENE FOUR
function redPill() {
    console.log("You have choosen the red pill.");
    welcome.style.visibility = 'hidden';
    var textbox = document.getElementById("textbox");
    textbox.style.display = "block";


}



function bluePill() {
    console.log("You have choosen the blue pill.");
    welcome.style.visibility = 'hidden';
    var textbox = document.getElementById("textbox");
    textbox.style.display = "block";

    question.innerText = 'THIS IS A QUESTION';


}


//SCENE FIVE
function levelOne() {

}