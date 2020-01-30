var textbox = document.getElementById("textbox");
var scoreBoard = document.getElementById("scoreboard");
var point = 0;
var points = document.getElementById("points");
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
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
welcome.innerText = 'A BLAST TO THE PAST: 80s Edition';
welcome.style.color = 'white';
textbox.style.display = "none";
scoreBoard.style.display = "none";
var start = document.getElementById("start");
choice.style.display = 'none';


function begin() {
    welcome.innerText = 'A BLAST TO THE PAST: 20th Century';
    welcome.style.visibility = 'visible';
    textbox.style.display = "none";
    scoreBoard.style.display = "none";
    start.style.display = 'block';
}

// Function begins when the "Start" button is pressed.
function startGame() {
    textbox.style.display = "none";
    scoreBoard.style.display = "none";
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
    scoreBoard.style.display = "none";
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
        scoreBoard.style.display = "none";
    } else {
        alert('Please enter name');
    }
}


function scene3() {
    // var back = document.getElementById('back');
    var choice = document.getElementById('choice'); //text for choicing red or blue pill.
    var welcome = document.getElementById('welcome'); //welcome text.
    welcome.innerText = 'Choose Your ADVENTURE:';

    //CREATING THE RED AND BLUE PILL BUTTONS

    // 1. Create RED button
    var red = document.createElement("button");
    red.innerHTML = "MUSIC GAME";
    red.style.backgroundColor = 'red'

    // 2. Append somewhere
    document.body.appendChild(red);

    // 3. Add event handler
    red.addEventListener("click", function() {
        console.log("welcome");
        red.style.display = 'none';
        blue.style.display = 'none';
        choice.innerText = player + ', you have choosen: THE RED PILL';
        textbox.style.display = "none";
        scoreBoard.style.display = "none";
        redPill();

    });

    // 1. Create BLUE button
    var blue = document.createElement("button");
    blue.innerHTML = "MOVIE GAME";
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
        scoreBoard.style.display = "none";
        bluePill();

    });
}

function redPill() {
    scene.innerHTML = 'RED PILL';
    console.log(player + " You have choosen the red pill.");
    welcome.innerText = '';
    textbox.style.display = "block";
    scoreBoard.style.display = "inline-block";
    choice.style.display = 'none';
    point = 250;
    points.innerText = point;
    document.body.style.backgroundImage = "url(living.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "1500px 1000px";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    red();
    // textboxVariables();
}



//FUNCTION TO START THE GAME FOR THE BLUE PILL
function bluePill() {
    scene.innerHTML = 'BLUE PILL';
    console.log(player + " You have choosen the blue pill.");
    welcome.innerText = '';
    textbox.style.display = "block";
    scoreBoard.style.display = "inline-block";
    choice.style.display = 'none';
    point = 300;
    points.innerText = point;
    // question.innerText = 'Welcome. You have just chosen the MOVIE PILL. ' + player + " You meet Marty McFly and he tells you that ";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
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
    var answerThree = document.getElementById('answer3');
    var answerFour = document.getElementById('answer4');

    // Set the innerHTML to the answers for the current scenario
    answerOne.innerHTML = answers.answerOne;
    answerTwo.innerHTML = answers.answerTwo;
    answerThree.innerHTML = answers.answerThree;
    answerFour.innerHTML = answers.answerFour;

    // Add 'clicking' to the answers
    answerOne.addEventListener("click", function() {
        // console.log("Test: " + question);
        //If the current question is equal to "Red One: ", then the first answer choice is correct.
        if (answerCount == 0) {
            console.log("A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right.");
            nextButton.style.display = 'block';
            point = point + 20;
            redA();
        }
        if (answerCount == 1) {
            console.log("We all love a good Chaka vibe, but this wasn’t one of those times. Sean just can’t see to get his right feet in motion with his left. He becomes embarrassed and walks away. Kevin, disappointed, tells you that you were no help. You lose 15 points.");
            nextButton.style.display = 'block';
            point = point - 15;
            redB();
        }
        if (answerCount == 2) {
            console.log("Run looks at you and says, It's Tricky?? What's that? Blair looks at Run and say, 'Well, that sounds like a good name for the next single. You lose 10 points , but gang 1 star for giving them a useful idea.");
            nextButton.style.display = 'block';
            redC();
        }
        if (answerCount == 3) {
            console.log("You decide to choose Hungry Eyes, and Jennifer doesnt think this is an appropriate song to dance to infront of her parents. Patrick gets upset because he will have to change the climax routine. You lose 15 points.");
            nextButton.style.display = 'block';
            redD();
        }
        if (answerCount == 4) {
            console.log("A. Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right.");
            // nextButton.style.display = 'block';
            nextButton.style.display = 'none';
            answerOne.style.display = 'none';
            answerTwo.style.display = 'none';
        }
    });
    answerTwo.addEventListener("click", function() {
        if (answerCount == 0) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
            nextButton.style.display = 'block';
            redA2();
        }
        if (answerCount == 1) {
            console.log("Deniece Williams wins every time and we are definitely cheering this boy on. Sean manages to stay on key the entire song. You just earned your  20points. ");
            redB2();
        }
        if (answerCount == 2) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
            nextButton.style.display = 'block';
            redC2();
        }
        if (answerCount == 3) {
            console.log("You chose '(I've had) the time of my life Patrick and Jennifer both are excited. Patrick can wait to lift Jennifer off her feet. You gain 25 points. ");
            nextButton.style.display = 'block';
            redD2();
        }
        if (answerCount == 4) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
            nextButton.style.display = 'none';
            answerOne.style.display = 'none';
            answerTwo.style.display = 'none';
        }
    });
    answerThree.addEventListener("click", function() {
        if (answerCount == 0) {
            console.log("Success!");
            blueA();
            nextButton.style.display = 'block';
        }
        if (answerCount == 1) {
            console.log("Success!");
            blueB();
            nextButton.style.display = 'block';
        }
        if (answerCount == 2) {
            console.log("Success!");
            blueC();
            nextButton.style.display = 'block';
        }
        if (answerCount == 3) {
            console.log("Success!");
            blueD();
            nextButton.style.display = 'block';
        }
        if (answerCount == 4) {
            console.log("Success!");
            nextButton.style.display = 'none';
            answerOne.style.display = 'none';
            answerTwo.style.display = 'none';
            // sceneBlueone();
        }
    });
    answerFour.addEventListener("click", function() {
        if (answerCount == 0) {
            console.log("Success!");
            blueA2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 1) {
            console.log("Success!");
            blueB2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 2) {
            console.log("Success!");
            blueC2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 3) {
            console.log("Success!");
            blueD2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 4) {
            console.log("Success!");
            nextButton.style.display = 'none';
            answerOne.style.display = 'none';
            answerTwo.style.display = 'none';
        }

    });
}
//FUNCTION TO START THE GAME FOR THE RED PIll

function red() {
    // An array of all the questions.
    let questions = [player + ', Tom Cruise invites you to come over. He has the house to himself for a few days. You are excited. The first thing he ask you to do is play a song on the radio so he dance around in the living room. What song do you choose?',
        'As you are walking home, you see Kevin Bacon trying to teach Chris Penn how to Dance for their senior prom. They stop you and ask you what song should they play to keep Chris on beat. Do you choose:',
        'You have gotten hungry. You stop at Krush Groovin bar and grill to grab a burger. Inside you meet Run DMC. You overhear Blair Underwood arguing with Run over what song they should perform at the showcase. You decide to come and help. Which song do you think would be best to perform? ',
        'After eating your burger, ' + player + ' you are about to head to the teleporter, when you see Jennifer Gray and Patrick Swayze practing for the end of the season talent show. They are looking for the perfect song to dance to. They ask you to choose out of these two selections. What do you choose? ',
        'You have finally made it to the teleporter, and you have to have at least 300 points to make it back home. After helping some people on your journey, you can calculate your points to see if you are able to go home and gain the reward.  '
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
            answerOne: "It's Tricky",
            answerTwo: "It's Like That",
            // answerThree: 'RED THREE PILL ANSWER THREE',
            // answerFour: 'RED THREE PILL ANSWER FOUR'
        },
        // Index 3 of the array. Contains the fourth set of answer choices.
        {
            answerOne: 'Hungry Eyes',
            answerTwo: "(I've Had) The Time of My Life.",
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
    nextButton.style.display = 'none';
    // Adds 'clicking' to the 'next' button. Goes to the next set of questions/answers.
    nextButton.addEventListener("click", function() {
        // Increases the current answer choice set by 1 (If you're on answer set 2, it increments by 1, so you can move on to answer set 3).
        answerCount++;
        // Calls the function to create the text boxes when the 'next' button is clicked.
        textboxVariables(answers[answerCount], questions[answerCount]);

        // Updates the question when the 'next' button is clicked.
        question.innerText = questions[answerCount];
        answers.innerText = questions[answerCount];
    });
    // homeButton.addEventListener("click", function() {
    //     begin();
    // });
}
/*****************************************************************************BLUE GAME*********************************************************************** */
function blue() {
    let questions = ['BLUE SCENE QUESTION ONE',
        'BLUE SCENE QUESTION TWO',
        'BLUE SCENE QUESTION THREE',
        'BLUE SCENE QUESTION FOUR',
        'BLUE SCENE QUESTION FIVE'
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];
    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            // answerOne: 'Old Time Rock and Roll',
            // answerTwo: 'Back in black.',
            answerThree: 'RED ONE PILL ANSWER THREE',
            answerFour: 'RED ONE PILL ANSWER FOUR'
        },
        // Index 1 of the array. Contains the second set of answer choices.
        {
            // answerOne: 'Ain’t nobody.',
            // answerTwo: 'Let’s hear it for the Boy',
            answerThree: 'RED TWO PILL ANSWER THREE',
            answerFour: 'RED TWO PILL ANSWER FOUR'
        },
        // Index 2 of the array. Contains the third set of answer choices.
        {
            // answerOne: 'RED THREE PILL ANSWER ONE',
            // answerTwo: 'RED THREE PILL ANSWER TWO',
            answerThree: 'RED THREE PILL ANSWER THREE',
            answerFour: 'RED THREE PILL ANSWER FOUR'
        },
        // Index 3 of the array. Contains the fourth set of answer choices.
        {
            // answerOne: 'RED FOUR PILL ANSWER ONE',
            // answerTwo: 'RED FOUR PILL ANSWER TWO',
            answerThree: 'RED FOUR PILL ANSWER THREE',
            answerFour: 'RED FOUR PILL ANSWER FOUR'
        },
        // Index 5 of the array. Contains the fifth set of answer choices.
        {
            // answerOne: 'RED FIVE PILL ANSWER ONE',
            // answerTwo: 'RED FIVE PILL ANSWER TWO',
            answerThree: 'RED FIVE PILL ANSWER THREE',
            answerFour: 'RED FIVE PILL ANSWER FOUR'
        }
    ];

    // Calls the function to create the text boxes. Passes the array of questions and the array of obecjts for the answers (so they don't have to be global variables).
    textboxVariables(answers[answerCount], questions[answerCount]);
    nextButton.style.display = 'none';
    // Adds 'clicking' to the 'next' button. Goes to the next set of questions/answers.
    nextButton.addEventListener("click", function() {
        // Increases the current answer choice set by 1 (If you're on answer set 2, it increments by 1, so you can move on to answer set 3).
        answerCount++;
        // Calls the function to create the text boxes when the 'next' button is clicked.
        textboxVariables(answers[answerCount], questions[answerCount]);
        // Updates the question when the 'next' button is clicked.
        question.innerText = questions[answerCount];

    });
    // homeButton.addEventListener("click", function() {
    //     begin();
    // });
}
/*****************************************************************************************************************************************************************/

var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');

function redA() {
    question.innerText = 'Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right. ';
    document.body.style.backgroundImage = "url(business.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        point = 250 + 20;
        points.innerText = point;
        document.body.style.backgroundImage = "url(countyside.jpeg)";
        nextButton.style.display = 'none';
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
    // answerOne.style.display = 'block';
}

function redA2() {
    question.innerText = 'You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose 10 points. ';
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        // point = 250 - 10;
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(countyside.jpeg)";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redB() {
    question.innerText = ' We all love a good Chaka vibe, but this wasn’t one of those times. Chris just can’t see to get his right feet in motion with his left. He becomes embarrassed and walks away. Kevin, disappointed, tells you that you were no help. You lose 15 points.';
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        // point = 240 - 15;
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redB2() {
    question.innerText = ' Deniece Williams wins every time and we are definitely cheering this boy on. Chris manages to stay on key the entire song. You just earned your  20 points. ';
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.style.display = 'block';
    nextButton.addEventListener("click", function() {
        // point = 270 + 20;
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redC() {
    question.innerText = "Run looks at you and says, It's Tricky?? What's that? Blair looks at Run and say, 'Well, that sounds like a good name for the next single. You lose 10 points!.";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        // point = 225 - 10;
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redC2() {
    question.innerText = "Blair and Run smile at one another. They really like your thinking. Run tells Blair he'll let the rest of the band know and he's excited to be performing in 'RUN'S HOUSE'. Blair screams at Run and tell him he will not say that. They both walk away. you get 15 points.";
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        // point = 290 + 15;
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redD() {
    question.innerText = "You decide to choose Hungry Eyes, and Jennifer doesnt think this is an appropriate song to dance to infront of her parents. Patrick gets upset because he will have to change the climax routine. You lose 15 points.";
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        // point = 215 - 15;
        points.innerText = point;
        nextButton.style.display = 'block';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerOne.style.display = 'none';
        answerTwo.style.display = 'none';
    });
}

function redD2() {
    question.innerText = "You choose '(I've had) the time of my life Patrick and Jennifer both are excited. Patrick can wait to lift Jennifer off her feet. You gain 25 points. ";
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        // point = 305 + 25;
        points.innerText = point;
        nextButton.style.display = 'block';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerOne.style.display = 'none';
        answerTwo.style.display = 'none';
    });
}
/********************************************************************************************************************************************************************** */

function blueA() {
    question.innerText = 'BLUE MOVIE ANSWER ONE';
    document.body.style.backgroundImage = "url(business.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        document.body.style.backgroundImage = "url(countyside.jpeg)";
        nextButton.style.display = 'none';
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
    // answerOne.style.display = 'block';
}

function blueA2() {
    question.innerText = 'BLUE ALTERNATE ANSWER ONE';
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(countyside.jpeg)";
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueB() {
    question.innerText = 'BLUE MOVIE ANSWER TWO';
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueB2() {
    question.innerText = 'BLUE ALTERNATE ANSWER TWO ';
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.style.display = 'block';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueC() {
    question.innerText = "BLUE MOVIE ANSWER THREE";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueC2() {
    question.innerText = "BLUE ALTERNATE ANSWER THREE";
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueD() {
    question.innerText = "BLUE MOVIE ANSWER FOUR";
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'block';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerThree.style.display = 'none';
        answerFour.style.display = 'none';
    });
}

function blueD2() {
    question.innerText = "BLUE ALTERNATE ANSWER FOUR ";
    document.body.style.backgroundImage = "url(footloose.jpeg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        nextButton.style.display = 'block';
        document.body.style.backgroundImage = "url(bar.jpeg)";
        answerThree.style.display = 'none';
        answerFour.style.display = 'none';
    });
}