var textbox = document.getElementById("textbox");
var introBox = document.getElementById("introBox");
var intro = document.getElementById('intro');
var scoreBoard = document.getElementById("scoreboard");
var point;
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
var proceedButton = document.getElementById('proceed');
// Create Go Button
var goButton = document.createElement("input");
// Counter for answers
var answerCount = 0;
// Create Welcome Header
var welcome = document.getElementById('welcome');
var header = document.getElementById('header');
// Array of flase values
var flagArray = [false, false, false, false, false];
welcome.innerText = 'A BLAST TO THE PAST';
// welcome.style.color = 'white';
textbox.style.display = "none";
introBox.style.display = "none";
scoreBoard.style.display = "none";
var start = document.getElementById("start");
choice.style.display = 'none';
// backgroundImage.className = 'img-responsive';
/******************************************************************************************************************************************************************/
// Function begins when the "Start" button is pressed.
function startGame() {
    textbox.style.display = "none";
    introBox.style.display = "none";
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
    welcome.style.display = 'none';
    header.innerText = 'TRAVELER, ENTER YOUR NAME: ';
}
/****************************************************************************************************************************************************************/
// Function begins when the "GO" button is clicked.
goButton.onclick = function letGo() {
    textbox.style.display = "none";
    introBox.style.display = "none";
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
        introScene();
        playerName.setAttribute("type", "hidden"); //HIDES TEXT BOX.
        goButton.setAttribute("type", "hidden"); // HIDES GO BUTTON
        // textbox.style.display = "block";
        introBox.style.display = "block";
        scoreBoard.style.display = "none";
    } else {
        alert('Please enter name');
    }
}

function introScene() {
    introBox.style.display = "block";
    header.innerText = ' ';
    document.body.style.backgroundImage = "url('images/attic.jpg')";
    intro.innerText = 'Hello ' + player + '. You have just found a time capsule in your parents attic. On the front of the time capsule, you see the words "The BEST of the 80s." '
    proceedButton.addEventListener("click", function() {
        introScene2();
    });
}

function introScene2() {
    introBox.style.display = "block";
    intro.innerText = 'As you open the time capsule, you are zapped into a dark room. A voice speaks: "You have awaken me. As your punishment, you must travel back in time and correct problems. In order to get back to the present time. You must collect 300 gems. If you collect 350 gems, I will reward you with a gift, as well as let you come home. If you do not, you will be stucked in the past for 20 years."  '
    proceedButton.addEventListener("click", function() {
        introChoice();
    });
}

function introChoice() {
    introBox.style.display = "block";
    header.innerText = ' ';
    intro.innerText = player + ', you are granted the option to travel in two different time machines. A phonebooth, and the DoLorean. How will you travel? ';
    proceedButton.addEventListener("click", function() {
        introBox.style.display = "none";
        scene3();
    });
}

/******************************************************************************************************************************************************************/
function scene3() {

    // var back = document.getElementById('back');
    var choice = document.getElementById('choice'); //text for choicing red or blue pill.
    var welcome = document.getElementById('welcome'); //welcome text.
    header.innerText = 'TIME TRAVEL OPTION:';
    // introBox.style.display = "none";

    //CREATING THE RED AND BLUE PILL BUTTONS

    // 1. Create RED button
    var red = document.createElement("button");
    red.innerHTML = "PHOTOBOOTH";
    red.style.backgroundColor = '#EC9B4E'
        // 2. Append somewhere
    document.body.appendChild(red);
    red.className = 'travelButton';
    // 3. Add event handler
    red.addEventListener("click", function() {
        console.log("welcome");
        red.style.display = 'none';
        blue.style.display = 'none';
        // choice.innerText = player + ', you have choosen: THE RED PILL';
        textbox.style.display = "none";
        introBox.style.display = "none";
        scoreBoard.style.display = "none";
        redPill();
    });

    // 1. Create BLUE button
    var blue = document.createElement("button");
    blue.innerHTML = "DELOREAN";
    blue.style.backgroundColor = '#EC9B4E';
    // 2. Append somewhere
    document.body.appendChild(blue);
    blue.className = 'travelButton';
    // 3. Add event handler
    blue.addEventListener("click", function() {
        console.log("welcome");
        blue.style.display = 'none';
        red.style.display = 'none';
        // choice.innerText = player + ', you have choosen: THE BLUE PILL';
        textbox.style.display = "none";
        introBox.style.display = "none";
        scoreBoard.style.display = "none";
        bluePill();
    });
}
/************************************************************************************************************************************************************************ */
//FUNCTIONS CREATED FOR EACH STORY. 

function redPill() {
    scene.innerText = 'You have Choosen to take the phonebooth back to the 20th Century';
    console.log(player + "You have Choosen to take the DeLorean back to the 20th Century");
    welcome.innerText = '';
    header.innerText = '';
    textbox.style.display = "block";
    introBox.style.display = "none";
    scoreBoard.style.display = "block";
    choice.style.display = 'none';
    point = 250;
    points.innerText = point;
    document.body.style.backgroundImage = "url('images/den.jpeg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "fixed";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    red();
    // textboxVariables();
}

//FUNCTION TO START THE GAME FOR THE BLUE PILL
function bluePill() {
    scene.innerText = 'You have Choosen to take the DeLorean back to the 20th Century';
    console.log(player + " You have Choosen to take the DeLorean back to the 20th Century");
    welcome.innerText = '';
    header.innerText = '';
    textbox.style.display = "block";
    introBox.style.display = "none";
    scoreBoard.style.display = "block";
    choice.style.display = 'none';
    point = 300;
    points.innerText = point;
    document.body.style.backgroundImage = "url('images/highschool.jpeg')";
    document.body.style.backgroundSize = "cover";
    // question.innerText = 'Welcome. You have just chosen the MOVIE PILL. ' + player + " You meet Marty McFly and he tells you that ";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    blue();
    //textboxVariables();
}
/************************************************************************************************************************************************************************ */
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
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point += 20;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redA();
        }
        if (answerCount == 1) {
            console.log("We all love a good Chaka vibe, but this wasn’t one of those times. Sean just can’t see to get his right feet in motion with his left. He becomes embarrassed and walks away. Kevin, disappointed, tells you that you were no help. You lose 15 points.");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point -= 15;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redB();
        }
        if (answerCount == 2) {
            console.log("Run looks at you and says, It's Tricky?? What's that? Blair looks at Run and say, 'Well, that sounds like a good name for the next single. You lose 10 points , but gang 1 star for giving them a useful idea.");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point -= 10;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redC();
        }
        if (answerCount == 3) {
            console.log("You decide to choose Hungry Eyes, and Jennifer doesnt think this is an appropriate song to dance to infront of her parents. Patrick gets upset because he will have to change the climax routine. You lose 15 points.");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point -= 15;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redD();
        }
        if (answerCount == 4) {
            console.log("LAST ONE.");
            nextButton.style.display = 'none';
            answerOne.style.display = 'none';
            answerTwo.style.display = 'none';
        }
    });
    answerTwo.addEventListener("click", function() {
        if (answerCount == 0) {
            console.log("You decide to play Back in Black by AC/DC and this frustrates Tom.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. You lose ten points.");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point -= 10;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redA2();
        }
        if (answerCount == 1) {
            console.log("Deniece Williams wins every time and we are definitely cheering this boy on. Sean manages to stay on key the entire song. You just earned your  20points. ");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point += 20;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redB2();
        }
        if (answerCount == 2) {
            console.log("Blair and Run smile at one another. They really like your thinking. Run tells Blair he'll let the rest of the band know and he's excited to be performing in 'RUN'S HOUSE'. Blair screams at Run and tell him he will not say that. They both walk away. you get 15 points.");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point += 15;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redC2();
        }
        if (answerCount == 3) {
            console.log("You chose '(I've had) the time of my life Patrick and Jennifer both are excited. Patrick can wait to lift Jennifer off her feet. You gain 25 points. ");
            nextButton.style.display = 'block';
            // If the first index is false, update the score
            if (!flagArray[answerCount])
                point += 25;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            redD2();
        }
        if (answerCount == 4) {
            console.log("LAST ONE!");
            nextButton.style.display = 'none';
            answerOne.style.display = 'none';
            answerTwo.style.display = 'none';
        }
    });
    answerThree.addEventListener("click", function() {
        if (answerCount == 0) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point += 30;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            blueA();
            nextButton.style.display = 'block';
        }
        if (answerCount == 1) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point += 25;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            blueB();
            nextButton.style.display = 'block';
        }
        if (answerCount == 2) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point -= 10;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            blueC();
            nextButton.style.display = 'block';
        }
        if (answerCount == 3) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point += 25;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
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
            if (!flagArray[answerCount])
                point -= 10;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            blueA2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 1) {
            console.log("Success!");
            blueB2();
            if (!flagArray[answerCount])
                point -= 10;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            nextButton.style.display = 'block';
        }
        if (answerCount == 2) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point += 25;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            blueC2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 3) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point -= 15;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
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
    scene.innerText = '';
    // An array of all the questions.
    let questions = [player + ', the phonebooth takes you to Joel Goodsen house. His parents have left for vacation and he has the house to himself for a few days. He wants you to play a song on his dads stero, so he can dance around in the living room. What song do you choose?',
        'As you are walking home, you see Kevin Bacon trying to teach Chris Penn how to Dance for their senior prom. They stop you and ask you what song should they play to keep Chris on beat. Do you choose:',
        'You have gotten hungry. You stop at Krush Groovin bar and grill to grab a burger. Inside you meet Run DMC. You overhear Blair Underwood arguing with Run over what song they should perform at the showcase. You decide to come and help. Which song do you think would be best to perform? ',
        'After eating your burger, ' + player + ' you are about to head to the teleporter, when you see Jennifer Gray and Patrick Swayze practing for the end of the season talent show. They are looking for the perfect song to dance to. They ask you to choose out of these two selections. What do you choose? ',
        // player + ', you finally made it to the phonebooth , and you have to have at least 300 points to make it back home. After helping some people on your journey, you can calculate your points to see if you are able to go home and gain the reward.  '
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];

    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            answerOne: 'Old Time Rock and Roll',
            answerTwo: 'Back in black.'
        },
        // Index 1 of the array. Contains the second set of answer choices.
        {
            answerOne: 'Ain’t nobody.',
            answerTwo: 'Let’s hear it for the Boy'
        },
        // Index 2 of the array. Contains the third set of answer choices.
        {
            answerOne: "It's Tricky",
            answerTwo: "It's Like That"
        },
        // Index 3 of the array. Contains the fourth set of answer choices.
        {
            answerOne: 'Hungry Eyes',
            answerTwo: "(I've Had) The Time of My Life."
        },
        // Index 5 of the array. Contains the fifth set of answer choices.
        {
            // answerOne: 'RED FIVE PILL ANSWER ONE',
            // answerTwo: 'RED FIVE PILL ANSWER TWO',
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
    scene.innerText = '';
    let questions = ["The Delorean takes you back to Sherman High School (1984). Five students are serving Saturday's Detention. John Bender, the criminal, wants you to help him close the door. What do you do? ",
        "The next stop the Delorean takes you is to Ferris Bueller's house. He decides to sick school for the day and his girlfriend Sloane and best friend Cameron are coming too. He wants to surprise them and make them smile. Where should he take them? ",
        player + ' you are riding in the Delorean and you see the Ghostbuster close by. You hear "If there is something weird and it dont look good. Who you gonna call? "',
        "The last past the Delorean takes you is 1955, Hill Valley, CA (Yes, your last challenge is to help Marty McFly). Marty has just gotten his parents back together at the school dance, and to celebrate he wants to play a song. What song should he choose? ",
        // 'BLUE SCENE QUESTION FIVE'
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];
    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            answerThree: 'You help Bender out.',
            answerFour: 'You dont help Bender.'
        },
        // Index 1 of the array. Contains the second set of answer choices.
        {
            answerThree: 'Von Steuben Day Parade',
            answerFour: 'Dodger Stadium'
        },
        // Index 2 of the array. Contains the third set of answer choices.
        {
            answerThree: 'Beetlejuice',
            answerFour: 'Ghostbusters'
        },
        // Index 3 of the array. Contains the fourth set of answer choices.
        {
            answerThree: 'Johnny B Goode',
            answerFour: 'Back in Time'
        },
        // Index 5 of the array. Contains the fifth set of answer choices.
        // {
        //     answerThree: 'RED FIVE PILL ANSWER THREE',
        //     answerFour: 'RED FIVE PILL ANSWER FOUR'
        // }
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
}
/*****************************************************************************************************************************************************************/

var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }
function addPoints(currentPoints, endPoints) {
    // If you're adding numbers to the current points..
    if (endPoints > currentPoints) {
        // Increment the currentPoints by one, until it equals the endPoints
        for (var i = currentPoints; i <= endPoints; i++) {
            console.log("Current Points: " + i);
            points.innerText = i;
            //sleep(50);
        }
        // Else, if you're subtracting from the currentPoints..    
    } else {
        // Decrement the currentPoints by one, until it equals the endPoints
        for (var i = currentPoints; i >= endPoints; i--) {
            console.log("Current Points: " + i);
            points.innerText = i;
            //sleep(50);
        }
    }
}


function nextbutton() {
    addPoints(points.innerText, point);
    //points.innerText = point;
    // document.body.style.backgroundImage = "url('images/barn.jpeg')";
    // document.body.style.backgroundSize = "auto";
    document.body.style.backgroundPosition = "center";
    nextButton.style.display = 'none';
    answerOne.style.display = 'inline';
    answerTwo.style.display = 'inline';
}

nextButton.addEventListener("click", nextbutton);

function redA() {
    question.innerText = 'Tom loves your choice in music. He runs into the living with his undies on and starts dancing, and this makes you extremely uncomfortable. You decide to go home. You earn 20 points for getting the song right. ';
    document.body.style.backgroundImage = "url('images/living.jpeg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    document.body.style.backgroundImage = "url('images/barn.jpeg')";
    nextButton();
}