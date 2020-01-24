var textbox = document.getElementById("textbox");

// Create Text Box for the player's name. Then set the id of the Text Box to "playerName"
var playerName = document.createElement("input");
playerName.setAttribute("id", "playerName");
var player;
let answers;
var nextButton = document.getElementById('next');
// var backButton = document.getElementById('back');
var homeButton = document.getElementById('home');
// Create Go Button
var goButton = document.createElement("input");

// Create Welcome Header
var welcome = document.getElementById('welcome');
welcome.innerText = 'CHOOSE YOUR DESTINY!';
welcome.style.color = 'white';
textbox.style.display = "none";
var start = document.getElementById("start");
choice.style.display = 'none';


function begin() {
    welcome.innerText = 'CHOOSE YOUR DESTINY!';
    welcome.style.visibility = 'visible';
    textbox.style.display = "none";
    start.style.display = 'block';
}

// Function begins when the "Start" button is pressed.
function startGame() {
    textbox.style.display = "none";
    // Create the "type" attribute for "playerName", and attribute to "text".
    playerName.setAttribute("type", "text");
    // Create the "value" attribute for "playerName", and attribute to "".
    playerName.setAttribute("value", "");
    // Add the text box to HTML.
    document.body.appendChild(playerName);
    playerName.className = 'nameBox';
    // Create the "type" attribute for "goButton", and attribute to "button".
    goButton.setAttribute("type", "button");
    // Create the "value" attribute for "goButton", and attribute to "GO".
    goButton.setAttribute("value", "GO");
    // Add the "GO" button to HTML.
    document.body.appendChild(goButton);
    goButton.className = 'goButton';
    // Remove the start button
    start.style.display = 'none';
    welcome.innerText = 'PLAYER, ENTER YOUR NAME: ';
}

// Function begins when the "GO" button is clicked.
goButton.onclick = function letGo() {
    textbox.style.display = "none";
    // Reads the text in the text box and store it in a variable.
    player = document.getElementById("playerName").value;
    // Set innerHTML to the value that's in the text box.
    playerName.innerHTML = player;
    // Print out "Hello" and the player's name.
    if (player != '')
        console.log("Hello " + player);
    playerNameCheck();


}


function playerNameCheck() {
    if (playerName.value != '') {
        console.log("Success!");
        scene3();
        playerName.setAttribute("type", "hidden"); //HIDES TEXT BOX.
        goButton.setAttribute("type", "hidden"); // HIDES GO BUTTON
        textbox.style.display = "none";
    } else {
        alert('Please enter name');
    }
}


function scene3() {
    // var back = document.getElementById('back');
    var choice = document.getElementById('choice'); //text for choicing red or blue pill.
    var welcome = document.getElementById('welcome'); //welcome text.
    welcome.innerText = 'Choose Your Pill:';

    //CREATING THE RED AND BLUE PILL BUTTONS

    // 1. Create RED button
    var red = document.createElement("button");
    red.innerHTML = "RED PILL";
    red.style.backgroundColor = 'red';
    // 2. Append somewhere
    document.body.appendChild(red);
    // 3. Add event handler
    red.addEventListener("click", function() {
        console.log("welcome");
        red.style.display = 'none';
        blue.style.display = 'none';
        choice.innerText = player + ', you have choosen: THE RED PILL';
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
        blue.style.display = 'none';
        red.style.display = 'none';
        choice.innerText = player + ', you have choosen: THE BLUE PILL';
        textbox.style.display = "none";
        bluePill();

    });
}

function redPill() {
    scene.innerHTML = player + ' chose RED PILL';
    console.log(player + " You have choosen the red pill.");
    welcome.innerText = '';
    textbox.style.display = "block";
    choice.style.display = 'none';
    redOne();
    textboxVariables();
}



//FUNCTION TO START THE GAME FOR THE BLUE PILL
function bluePill() {
    scene.innerHTML = player + ' chose BLUE PILL';
    console.log(player + " You have choosen the blue pill.");
    welcome.innerText = '';
    textbox.style.display = "block";
    choice.style.display = 'none';
    question.innerText = 'THIS IS A QUESTION';
    blueOne();
    textboxVariables();
}

//SCENE FOUR
//DECLARING TEXT BOX QUESTION AND ANSWER BOXES.
function textboxVariables() {
    var scene = document.getElementById('scene');
    var question = document.getElementById('question');
    // Declare variable
    var One;
    var Two;
    var Three;
    var Four;

    // Declare answer variable
    var answerOne = document.getElementById('answer1');
    var answerTwo = document.getElementById('answer2');
    var answerThree = document.getElementById('answer3');
    var answerFour = document.getElementById('answer4');

    // Call function to get Question and Answers for scenario 1
    //RED SCENARIOS
    //redOne();
    // redTwo();
    // redThree();
    // redFour();
    // redFive();
    //BLUE SCENARIOS

    // Set value equal to answers for scenario 1
    answerOne.setAttribute("value", answers.answerOne);
    answerTwo.setAttribute("value", answers.answerTwo);
    answerThree.setAttribute("value", answers.answerThree);
    answerFour.setAttribute("value", answers.answerFour);

    // Set answer choices equal to answers for current scenario
    One = document.getElementById('answer1').value;
    Two = document.getElementById('answer2').value;
    Three = document.getElementById('answer3').value;
    Four = document.getElementById('answer4').value;

    // Set the innerHTML to the answers for the current scenario
    answerOne.innerHTML = One;
    answerTwo.innerHTML = Two;
    answerThree.innerHTML = Three;
    answerFour.innerHTML = Four;
}
//FUNCTION TO START THE GAME FOR THE RED PIll

function redOne() {
    question.innerText = 'RED ONE: ';
    answers = {
            answerOne: 'RED ONE PILL ANSWER ONE',
            answerTwo: 'RED TWO PILL ANSWER TWO',
            answerThree: 'RED THREE PILL ANSWER TWO',
            answerFour: 'RED FOUR PILL ANSWER TWO'
        }
        // backButton.addEventListener("click", function() {
        //     redOne();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        redTwo();
        textboxVariables();
    });

}


function redTwo() {
    question.innerText = 'RED TWO: ';
    answers = {
            answerOne: 'RED ONE PILL ANSWER ONE',
            answerTwo: 'RED TWO PILL ANSWER TWO',
            answerThree: 'RED THREE PILL ANSWER THREE',
            answerFour: 'RED FOUR PILL ANSWER FOUR'
        }
        // backButton.addEventListener("click", function() {
        //     redOne();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        redThree();
        textboxVariables();
    });
}

function redThree() {
    question.innerText = 'RED THREE: ';
    answers = {
            answerOne: 'RED ONE PILL ANSWER ONE',
            answerTwo: 'RED TWO PILL ANSWER TWO',
            answerThree: 'RED THREE PILL ANSWER THREE',
            answerFour: 'RED FOUR PILL ANSWER FOUR'
        }
        // backButton.addEventListener("click", function() {
        //     redTwo();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        redFour();
        textboxVariables();
    });
}

function redFour() {
    question.innerText = 'RED FOUR: ';
    answers = {
            answerOne: 'RED ONE PILL ANSWER ONE',
            answerTwo: 'RED TWO PILL ANSWER TWO',
            answerThree: 'RED THREE PILL ANSWER THREE',
            answerFour: 'RED FOUR PILL ANSWER FOUR'
        }
        // backButton.addEventListener("click", function() {
        //     redThree();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        redFive();
        textboxVariables();
    });
}

function redFive() {
    question.innerText = 'RED FIVE: ';
    answers = {
            answerOne: 'RED ONE PILL ANSWER ONE',
            answerTwo: 'RED TWO PILL ANSWER TWO',
            answerThree: 'RED THREE PILL ANSWER THREE',
            answerFour: 'RED FOUR PILL ANSWER FOUR'
        }
        // backButton.addEventListener("click", function() {
        //     redFour();
        //     textboxVariables();
        // });
    homeButton.addEventListener("click", function() {
        begin();
    });

}

/**************************************************************************************************************************************************************** */
function blueOne() {
    question.innerText = 'BLUE ONE: ';
    answers = {
            answerOne: 'Get off',
            answerTwo: 'Get on',
            answerThree: 'get back',
            answerFour: 'hello'
        }
        // backButton.addEventListener("click", function() {
        //     blueOne();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        blueTwo();
        textboxVariables();
    });
}

function blueTwo() {
    question.innerText = 'BLUE TWO: ';
    answers = {
            answerOne: 'yell',
            answerTwo: '2',
            answerThree: 'get back',
            answerFour: 'hello'
        }
        // backButton.addEventListener("click", function() {
        //     blueOne();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        blueThree();
        textboxVariables();
    });
}

function blueThree() {
    question.innerText = 'BLUE THREE: ';
    answers = {
            answerOne: 'yell',
            answerTwo: '3',
            answerThree: 'get back',
            answerFour: 'hello'
        }
        // backButton.addEventListener("click", function() {
        //     blueTwo();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        blueFour();
        textboxVariables();
    });
}

function blueFour() {
    question.innerText = 'BLUE FOUR: ';
    answers = {
            answerOne: 'yell',
            answerTwo: '4',
            answerThree: 'get back',
            answerFour: 'hello'
        }
        // backButton.addEventListener("click", function() {
        //     blueThree();
        //     textboxVariables();
        // });
    nextButton.addEventListener("click", function() {
        blueFive();
        textboxVariables();
    });
}

function blueFive() {
    question.innerText = 'BLUE FIVE: ';
    answers = {
            answerOne: 'yell',
            answerTwo: '5',
            answerThree: 'get back',
            answerFour: 'hello'
        }
        // backButton.addEventListener("click", function() {
        //     blueFour();
        //     textboxVariables();
        // });
    homeButton.addEventListener("click", function() {
        begin();
    });

}
/** */
/*****************************************************************************************************************************************************************/