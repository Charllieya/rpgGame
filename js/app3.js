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
// Counter for answers
var answerCount = 0;
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
    scene.innerHTML = 'RED PILL';
    console.log(player + " You have choosen the red pill.");
    welcome.innerText = '';
    textbox.style.display = "block";
    choice.style.display = 'none';
    red();
    // textboxVariables();
}



//FUNCTION TO START THE GAME FOR THE BLUE PILL
function bluePill() {
    scene.innerHTML = 'BLUE PILL';
    console.log(player + " You have choosen the blue pill.");
    welcome.innerText = '';
    textbox.style.display = "block";
    choice.style.display = 'none';
    //question.innerText = 'THIS IS A QUESTION';
    blue();
    //textboxVariables();
}

//SCENE FOUR
//DECLARING TEXT BOX QUESTION AND ANSWER BOXES.
function textboxVariables(answers, question) {
    var scene = document.getElementById('scene');
    // var question = document.getElementById('question');

    // Declare answer variable
    var answerOne = document.getElementById('answer1');
    var answerTwo = document.getElementById('answer2');
    // var answerThree = document.getElementById('answer3');
    // var answerFour = document.getElementById('answer4');

    // Set the innerHTML to the answers for the current scenario
    answerOne.innerHTML = answers.answerOne;
    answerTwo.innerHTML = answers.answerTwo;
    // answerThree.innerHTML = answers.answerThree;
    // answerFour.innerHTML = answers.answerFour;

    // Add 'clicking' to the answers
    answerOne.addEventListener("click", function() {
        // console.log("Test: " + question);
        //If the current question is equal to "Red One: ", then the first answer choice is correct.
        if (answerCount == 0) {
            console.log("A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right.");
            sceneOne();
        }
        if (answerCount == 1) {
            console.log("We all love a good Chaka vibe, but this wasn’t one of those times. Sean just can’t see to get his right feet in motion with his left. He becomes embarrassed and walks away. Kevin, disappointed, tells you that you were no help. You lose 15 points.");
        }
        if (answerCount == 2) {
            console.log("A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right.");
        }
        if (answerCount == 3) {
            console.log("A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right.");
        }
        if (answerCount == 4) {
            console.log("A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right.");
        }
    });
    answerTwo.addEventListener("click", function() {
        if (answerCount == 0) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
        }
        if (answerCount == 1) {
            console.log("Deniece Williams wins every time and we are definitely cheering this boy on. Sean manages to stay on key the entire song. You just earned your  20points. ");
        }
        if (answerCount == 2) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
        }
        if (answerCount == 3) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
        }
        if (answerCount == 4) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
        }
    });
    // answerThree.addEventListener("click", function() {
    //     if (question == "Red Three: ") {
    //         console.log("Success!");
    //     } else {
    //         console.log("Wrong Answer!");
    //     }
    // });
    // answerFour.addEventListener("click", function() {
    //     if (question == "Red Four: ") {
    //         console.log("Success!");
    //     } else {
    //         console.log("Wrong Answer!");
    //     }
    // });
}
//FUNCTION TO START THE GAME FOR THE RED PIll

function red() {
    // An array of all the questions.
    let questions = [player + ', Tom cruise invites you to come over. He has the house to himself for a few days. You are excited. The first thing he ask you to do is play a song on the radio so he dance around in the living room. What song do you choose?',
        'As you are walking home, you see Kevin Bacon trying to teach Sean Penn how to Dance for their senior prom. They stop you and ask you what song should they play to keep Sean on beat. Do you choose:',
        'Red Three: ',
        'Red Four: ',
        'Red Five: '
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];

    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            answerOne: 'Old Time Rock and Roll',
            answerTwo: 'Back in black.',
            // answerThree: 'RED ONE PILL ANSWER THREE',
            // answerFour: 'RED ONE PILL ANSWER FOUR'
        },
        // Index 1 of the array. Contains the second set of answer choices.
        {
            answerOne: 'Ain’t nobody.',
            answerTwo: 'Let’s hear it for the Boy',
            // answerThree: 'RED TWO PILL ANSWER THREE',
            // answerFour: 'RED TWO PILL ANSWER FOUR'
        },
        // Index 2 of the array. Contains the third set of answer choices.
        {
            answerOne: 'RED THREE PILL ANSWER ONE',
            answerTwo: 'RED THREE PILL ANSWER TWO',
            // answerThree: 'RED THREE PILL ANSWER THREE',
            // answerFour: 'RED THREE PILL ANSWER FOUR'
        },
        // Index 3 of the array. Contains the fourth set of answer choices.
        {
            answerOne: 'RED FOUR PILL ANSWER ONE',
            answerTwo: 'RED FOUR PILL ANSWER TWO',
            // answerThree: 'RED FOUR PILL ANSWER THREE',
            // answerFour: 'RED FOUR PILL ANSWER FOUR'
        },
        // Index 5 of the array. Contains the fifth set of answer choices.
        {
            answerOne: 'RED FIVE PILL ANSWER ONE',
            answerTwo: 'RED FIVE PILL ANSWER TWO',
            // answerThree: 'RED FIVE PILL ANSWER THREE',
            // answerFour: 'RED FIVE PILL ANSWER FOUR'
        }
    ];

    // Calls the function to create the text boxes. Passes the array of questions and the array of obecjts for the answers (so they don't have to be global variables).
    textboxVariables(answers[answerCount], questions[answerCount]);

    // Adds 'clicking' to the 'next' button. Goes to the next set of questions/answers.
    nextButton.addEventListener("click", function() {
        // Increases the current answer choice set by 1 (If you're on answer set 2, it increments by 1, so you can move on to answer set 3).
        answerCount++;
        // Calls the function to create the text boxes when the 'next' button is clicked.
        textboxVariables(answers[answerCount], questions[answerCount]);

        // Updates the question when the 'next' button is clicked.
        question.innerText = questions[answerCount];
    });
    homeButton.addEventListener("click", function() {
        begin();
    });
}

function blue() {
    let questions = ['Charllieya , Tom cruise invites you to come over. He has the house to himself for a few days. You are excited. The first thing he ask you to do is play a song on the radio so he dance around in the living room. What song do you choose?',
        'As you are walking home, you see Kevin Bacon trying to teach Sean Penn how to Dance for their senior prom. They stop you and ask you what song should they play to keep Sean on beat. Do you choose:',
        'Red Three: ',
        'Red Four: ',
        'Red Five: '
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];

    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            answerOne: 'Old Time Rock and Roll',
            answerTwo: 'Back in black.',
            // answerThree: 'RED ONE PILL ANSWER THREE',
            // answerFour: 'RED ONE PILL ANSWER FOUR'
        },
        // Index 1 of the array. Contains the second set of answer choices.
        {
            answerOne: 'Ain’t nobody.',
            answerTwo: 'Let’s hear it for the Boy',
            // answerThree: 'RED TWO PILL ANSWER THREE',
            // answerFour: 'RED TWO PILL ANSWER FOUR'
        },
        // Index 2 of the array. Contains the third set of answer choices.
        {
            answerOne: 'RED THREE PILL ANSWER ONE',
            answerTwo: 'RED THREE PILL ANSWER TWO',
            // answerThree: 'RED THREE PILL ANSWER THREE',
            // answerFour: 'RED THREE PILL ANSWER FOUR'
        },
        // Index 3 of the array. Contains the fourth set of answer choices.
        {
            answerOne: 'RED FOUR PILL ANSWER ONE',
            answerTwo: 'RED FOUR PILL ANSWER TWO',
            // answerThree: 'RED FOUR PILL ANSWER THREE',
            // answerFour: 'RED FOUR PILL ANSWER FOUR'
        },
        // Index 5 of the array. Contains the fifth set of answer choices.
        {
            answerOne: 'RED FIVE PILL ANSWER ONE',
            answerTwo: 'RED FIVE PILL ANSWER TWO',
            // answerThree: 'RED FIVE PILL ANSWER THREE',
            // answerFour: 'RED FIVE PILL ANSWER FOUR'
        }
    ];

    // Calls the function to create the text boxes. Passes the array of questions and the array of obecjts for the answers (so they don't have to be global variables).
    textboxVariables(answers[answerCount], questions[answerCount]);

    // Adds 'clicking' to the 'next' button. Goes to the next set of questions/answers.
    nextButton.addEventListener("click", function() {
        // Increases the current answer choice set by 1 (If you're on answer set 2, it increments by 1, so you can move on to answer set 3).
        answerCount++;
        // Calls the function to create the text boxes when the 'next' button is clicked.
        textboxVariables(answers[answerCount], questions[answerCount]);

        // Updates the question when the 'next' button is clicked.
        question.innerText = questions[answerCount];
    });
    homeButton.addEventListener("click", function() {
        begin();
    });
}
/*****************************************************************************************************************************************************************/

var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');

function sceneOne() {
    question.innerText = 'A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right. ';
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
    // answerOne.style.display = 'block';
}