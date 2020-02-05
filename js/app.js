// Create Welcome Header
var welcome = document.getElementById('welcome');
var header = document.getElementById('header');
/****************************************************************** */
//DECLARING INTRO VARIABLES GLOBALLY.
var introBox = document.getElementById("introBox");
var intro = document.getElementById('intro');
var proceedButton = document.getElementById('proceed');
/****************************************************************** */
//DECLARING THE TEXTBOX AND ANSWERBOX VARIABLES GLOBALLY.
var textbox = document.getElementById("textbox");
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
let answers;
var nextButton = document.getElementById('next');
// Counter for answers to continue to next question.
var answerCount = 0;
// Array of flase values
var flagArray = [false, false, false, false, false];
/****************************************************************** */
//DECLARING THE SCOREBOARD VARIABLE
var scoreBoard = document.getElementById("scoreboard");
//DECLARING THE POINTS AND INITIALIZING THE POINT
var point = 0;
//to print points onto screen.
var points = document.getElementById("points");
/****************************************************************** */
// Create Text Box dynamically for the player's name. Then set the id of the Text Box to "playerName"
var player;
var playerName = document.createElement("input");
playerName.setAttribute("id", "playerName");
// Create Go Button
var goButton = document.createElement("input");
/****************************************************************** */
welcome.innerText = 'A BLAST TO THE PAST';
// welcome.style.color = 'white';
textbox.style.display = "none";
introBox.style.display = "none";
scoreBoard.style.display = "none";
var start = document.getElementById("start");
choice.style.display = 'none';
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

/******************************************************************************************************************************************************************* */
//                                                        /** INTRO SCENES (ATTIC SCENES)*/
/******************************************************************************************************************************************************************* */
function introScene() {
    introBox.style.display = "block";
    header.innerText = ' ';
    document.body.style.backgroundImage = "url('images/attic.jpg')";
    intro.innerText = 'Hello ' + player + '. The year is 2020 and you have just found a time capsule in your parents attic. On the front of the time capsule, you see the words "Let The Good Times Roll: 80s Decade". It also has in large writing: IMPORTANT!! DO NOT OPEN UNTIL 2025. Curiosity get the best of you, and you decide to open the time capsule. You are then ZAPPED into a dark room. '
    proceedButton.addEventListener("click", function() {
        document.body.style.backgroundImage = "url('images/darkRoom.jpeg')";
        document.body.style.backgroundSize = "cover";
        introScene2();
    });
}

function introScene2() {
    introBox.style.display = "block";
    intro.innerText = player + ', a voice tells you that because you open the time capsule too early, you accidently altered time in that decade. In order to get back to the present time, you are asked to help fixed scenarios from the 1980s. '
    proceedButton.addEventListener("click", function() {
        introScene3();
    });
}

function introScene3() {
    introBox.style.display = "block";
    intro.innerText = 'The voice tells you that you have to collect a certain number of gems. If you succeed, you will be reward a gift, in addition to returning home. If you do not, you will be stucked in the decade for the next year!" '
    proceedButton.addEventListener("click", function() {
        introChoice();
    });
}

function introChoice() {
    introBox.style.display = "block";
    header.innerText = ' ';
    intro.innerText = player + ', you are granted the option to travel in two different time machines. A PHONEBOOTH (you must gain 300 gems), and the DOLOREAN(you must gain 400 gems). How will you travel? ';
    proceedButton.addEventListener("click", function() {
        document.body.style.backgroundImage = "url('images/twoDoor.jpg')";
        // document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        introBox.style.display = "none";
        scene3();
    });
}
/******************************************************************************************************************************************************************* */
//                                                        /** INTRO SCENES (ATTIC SCENES) */
/******************************************************************************************************************************************************************* */

function scene3() {

    // var back = document.getElementById('back');
    var choice = document.getElementById('choice'); //text for choicing red or blue pill.
    var welcome = document.getElementById('welcome'); //welcome text.
    header.innerText = 'TIME TRAVEL OPTION:';
    // introBox.style.display = "none";

    //CREATING THE RED AND BLUE PILL BUTTONS

    /** CREATE PHONEBOOTH BUTTON */
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

    /**CREATE DOLOREAN BUTTON */
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

/******************************************************************************************************************************************************************* */
/*                                                     /**TEXTBOXES FOR PHONEBOOTH AND DOLOREAN
TEXTBOX, ANSWER CHOICE BOXES AND NEXT BUTTON ARE USED.
FUNCTIONS START THE STORIES, WHICH ARE IN ARRAY OF OBJECTS */
/******************************************************************************************************************************************************************* */
//CREATES TEXTBOX FOR PHONEBOOTH (RED BUTTON) STORY. CALLS THE RED FUNCTION FOR (ARRAY OF OBJECTS FOR PHONEBOOTH STORY).
//FUNCTION TO START THE GAME FOR THE RED BUTTON
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
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    red();
    // textboxVariables();
}

//CREATES TEXTBOX FOR PHONEBOOTH (RED BUTTON) STORY. CALLS THE RED FUNCTION FOR (ARRAY OF OBJECTS FOR PHONEBOOTH STORY).
//FUNCTION TO START THE GAME FOR THE BLUE BUTTON
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
                point += 40;
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
                point += 30;
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
                point -= 5;
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
                point += 50;
            // Sets the first index to true after the points have been added, so the score doesn't get updated again.
            flagArray[answerCount] = true;
            blueC2();
            nextButton.style.display = 'block';
        }
        if (answerCount == 3) {
            console.log("Success!");
            if (!flagArray[answerCount])
                point -= 10;
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
    let questions = [player + ", the phonebooth takes you to Joel Goodsen's house. His parents have left for vacation and he has the house to himself for a few days. He wants you to play a song on his dad's stereo, so he can dance around in the living room. What song do you choose?",
        'You exit the phonebooth and you see Ren McCormack trying to teach Willard Hewitt how to dance for their senior prom. They stop you and ask you what song should they play to keep Willard on beat. Do you choose:',
        'You have gotten hungry. You stop at Krush Groovin bar and grill to grab a burger. Inside you meet Run, from Run DMC and his brother Russell Walker. You overhear Russell arguing with Run over what song they should perform at the showcase. You decide to come and help. Which song do you think would be best to perform? ',
        'After eating your burger, ' + player + ' you are about to head to the phonebooth, when you see Baby and Johnny practing for the end of the season talent show. They are looking for the perfect song to dance to. They ask you to choose out of these two selections. What do you choose? ',
        // player + ', you finally made it to the phonebooth , and you have to have at least 300 points to make it back home. After helping some people on your journey, you can calculate your points to see if you are able to go home and gain the reward.  '
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];

    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            answerOne: 'Old Time Rock and Roll',
            answerTwo: 'Back in Black.'
        },
        // Index 1 of the array. Contains the second set of answer choices.
        {
            answerOne: "Ain’t Nobody.",
            answerTwo: 'Let’s Hear It for the Boy'
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
        "The next stop the Delorean takes you is to Ferris Bueller's house. He decides to skip school for the day and his girlfriend Sloane and best friend Cameron are coming too. He wants to surprise them and do something exciting. Where should he take them? ",
        player + ' you are riding in the Delorean and you see a group of people close by. You hear "If there is something weird and it dont look good. Who you gonna call? "',
        "The last place the Delorean takes you is 1955, Hill Valley, CA (Yes, your last challenge is to help Marty McFly). Marty has just gotten his parents back together at the school dance, and to celebrate he wants to play a song. What song should he choose? ",
        // 'BLUE SCENE QUESTION FIVE'
    ];

    // Set the question's innerText to the value of the current index. (If you're on the third set of answers, set the question to the question 3, which is 'Red Three').
    question.innerText = questions[answerCount];
    // An array of objects
    answers = [
        // Index 0 of the array. Contains the first set of answer choices.
        {
            answerThree: 'You dont help Bender.',
            answerFour: 'You choose to help Bender.'
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


/******************************************************************************************************************************************************************* */
//                                                        START OF PHONEBOOTH ANSWERS
/******************************************************************************************************************************************************************* */
/******************************************************************************************************************************************************************* */
//                                                        /** RISKY BUSINESS ANSWERS */
/******************************************************************************************************************************************************************* */
function redA() { //ANSWER CHOOSE A - ARRAY 0
    question.innerText = 'Joel loves your choice in music. He runs into the living in his shirt and underwear and starts dancing, and this makes you extremely uncomfortable. You leave and reenter the phonebooth. You earn 20 gems for getting the song right. ';
    document.body.style.backgroundImage = "url('images/living.jpeg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        //points.innerText = point;
        document.body.style.backgroundImage = "url('images/barn.jpeg')";
        // document.body.style.backgroundSize = "auto";
        document.body.style.backgroundPosition = "center";
        nextButton.style.display = 'none';
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
    // answerOne.style.display = 'block';
}

function redA2() { //ANSWER CHOOSE B - ARRAY 0
    question.innerText = 'You decide to play Back in Black by AC/DC and this frustrates Joel.  He tells you that he had a surprise for you but didn’t think the music was a perfect fit. He tells you to leave. You lose 10 gems. ';
    document.body.style.backgroundImage = "url('images/living.jpeg')";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url('images/barn.jpeg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}
/******************************************************************************************************************************************************************* */
//                                                        /** END OF RISKY BUSINESS ANSWERS */
/******************************************************************************************************************************************************************* */
/******************************************************************************************************************************************************************* */
//                                                        /** FOOTLOOSE ANSWERS */
/******************************************************************************************************************************************************************* */
function redB() { //ANSWER CHOOSE A - ARRAY 1 
    question.innerText = ' Although we love Chaka Khan, the song is not as upbeat as Ren was hoping. Willard just can’t see to get his right feet in motion with his left. He becomes embarrassed and walks away. Ren, disappointed, tells you that you were no help. You lose 15 gems.';
    document.body.style.backgroundImage = "url('images/footloose.jpg')";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url('images/gameroom.jpeg')";
        document.body.style.backgroundSize = "cover";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redB2() { //ANSWER CHOOSE B - ARRAY 1
    question.innerText = ' Deniece Williams wins every time and the song has an amazing tempo that helps Ren teach Willard some rhythm. Willard manages to stay on key the entire song. You just earned yourself 20 gems. ';
    document.body.style.backgroundImage = "url('images/footloose.jpg')";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.style.display = 'block';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url('images/gameroom.jpeg')";
        document.body.style.backgroundSize = "cover";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}
/******************************************************************************************************************************************************************* */
//                                                        /** END OF FOOTLOOSE ANSWERS */
/******************************************************************************************************************************************************************* */
/******************************************************************************************************************************************************************* */
//                                                        /** KRUSH GROOVE ANSWERS */
/******************************************************************************************************************************************************************* */
function redC() { //ANSWER CHOOSE A - ARRAY 2
    question.innerText = "Run looks at you and says, It's Tricky?? What's that? Russell looks at Run and say, 'Well, that sounds like a good name for the next single. You lose 10 gems!.";
    document.body.style.backgroundImage = "url('images/openBar.jpeg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url('images/countyside.jpeg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}

function redC2() { //ANSWER CHOOSE B - ARRAY 2
    question.innerText = "Russell and Run smile at one another. They really like your thinking. Run tells Russell he'll let the rest of the band know and he's excited to be performing in 'RUN'S HOUSE'. Russell screams at Run and tell him he will not say that. They both walk away. You gain 15 gems.";
    document.body.style.backgroundImage = "url('images/openBar.jpeg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url('images/countyside.jpeg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        answerOne.style.display = 'inline';
        answerTwo.style.display = 'inline';
    });
}
/******************************************************************************************************************************************************************* */
//                                                        /** END OF KRUSH GROOVE ANSWERS */
/******************************************************************************************************************************************************************* */
/******************************************************************************************************************************************************************* */
//                                                        /** DIRTY DANCING ANSWERS */
/******************************************************************************************************************************************************************* */
function redD() { //ANSWER CHOOSE A - ARRAY 3 
    question.innerText = "You decide to pcik 'Hungry Eyes', and Baby doesnt think this is an appropriate song to dance to infront of her parents. Johnny gets upset because he will have to change the climax in the dance routine. You lose 15 gems.";
    document.body.style.backgroundImage = "url('images/ballroom.jpeg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        document.body.style.backgroundImage = "url('images/phonebooth.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'block';
        answerOne.style.display = 'none';
        answerTwo.style.display = 'none';
        winStatement();
    });
}

function redD2() { //ANSWER CHOOSE B - ARRAY 3
    question.innerText = player + ", you choose '(I've had) the Time of my Life' and this makes Johnny and Baby both excited. Baby cannot wait to surprised her family at the last big dance of the summer. Baby will not be in a corner this summer. You gain 25 gems. ";
    document.body.style.backgroundImage = "url('images/ballroom.jpeg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    answerOne.style.display = 'none';
    answerTwo.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        points.innerText = point;
        document.body.style.backgroundImage = "url('images/phonebooth.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'block';
        answerOne.style.display = 'none';
        answerTwo.style.display = 'none';
        winStatement();
    });
}
/******************************************************************************************************************************************************************* */
//                                                        /** END DIRTY DANCING ANSWERS */
/******************************************************************************************************************************************************************* */
/******************************************************************************************************************************************************************* */
//                                                          WIN STATEMENT AND REWARD FOR PHONEBOOTH GAME
/******************************************************************************************************************************************************************* */
function winStatement() {
    question.innerText = player + ", you finally made it to the phonebooth , and you have to have at least 300 gems to make it back home. Thank you for fixing these  scenarios on your journey. Click 'NEXT' to see your points to see if you are able to go home and gain the reward. "
    nextButton.addEventListener("click", function() {
        winRed();
    });
}
//IF STATEMENT TO DETERMINE IF PLAYER GETS TO GO HOME AND GAIN REWARDS OR LOSE.
//ARRAY OF AWARDS. WILL RANDOMLY BE CHOOSEN. 
function winRed() {
    var phonebooth = ['WEALTH', 'IMMORTALITY', 'BILINGUAL', 'DREAM HOME', 'INVISIBILITY'];
    var boothRewards = phonebooth[Math.floor(Math.random() * phonebooth.length)];
    if (point >= 300) {
        question.innerText = "Your score is  " + point + ". Congratulations you have enough gems to make it back home, you recieve the reward:  " + boothRewards;
        nextButton.addEventListener("click", function() {
            nextButton.innerText = 'START OVER';
            document.body.style.backgroundImage = "url('images/billandted.jpeg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            theEndone();
        });

    }
    if (point < 300) {
        console.log(point + "jj");
        question.innerText = player + " I regret to inform you that you only recieved " + point + " gems this time. That is not enough to take you back to the future. You do not recieve the reward and will not be able to go home."
        nextButton.addEventListener("click", function() {
            nextButton.innerText = 'START OVER';
            document.body.style.backgroundImage = "url('images/billandted.jpeg')";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            theEndone();
        });
    }
}
//END STATMENT: THANK YOU FOR PLAYING MY GAME.
function theEndone() {
    question.innerText = "Thank you for playing " + player + "! You have reached the end of my first RGP/Trivia Game. Part TWO will be under way soon. Points and rewards start over, once game restarts."
    nextButton.addEventListener("click", function() {
        location.reload();
    });
}
/******************************************************************************************************************************************************************* */
//                                                          END OF GAME FOR PHONEBOOTH SELECTION
/******************************************************************************************************************************************************************* */





/******************************************************************************************************************************************************************* */
//                                                          /* BLUE = DOLEREAN ANSWER SCENARIOS */
/********************************************************************************************************************************************************************/
/******************************************************************************************************************************************************************* */
//                                                          /* THE BREAKFAST CLUB ANSWERS */
/********************************************************************************************************************************************************************/
function blueA() {
    question.innerText = 'You choose not to help Bender close the library door. Vernon, the principal, does not come in. You gain 30 gems';
    document.body.style.backgroundImage = "url('images/library.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/ferris.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'none';
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueA2() {
    question.innerText = 'You choose to help Bender close the door. You both are very loud and Vernon comes in and you both get caught. You lose 5 gems';
    document.body.style.backgroundImage = "url('images/library.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        nextButton.style.display = 'none';
        document.body.style.backgroundImage = "url('images/ferris.jpeg')";
        document.body.style.backgroundSize = "cover";
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}
/******************************************************************************************************************************************************************* */
//                                                          /* END THE BREAKFAST CLUB ANSWERS */
/********************************************************************************************************************************************************************/
/******************************************************************************************************************************************************************* */
//                                                          /* FERRIS BUELLER ANSWERS */
/********************************************************************************************************************************************************************/
function blueB() {
    question.innerText = 'Ohhhh Yeahhhh! Ferris is excited about taking his friends to the parade. He plans own performing Danke Schoen and Twist and Shout. You gain 40 gems';
    document.body.style.backgroundImage = "url('images/ferrisandfriends.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/marshmallow.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'none';
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueB2() {
    question.innerText = 'Unfortunately ' + player + ', Ferris only wants to take the DAY off, not the weekend. Plus, the Dodgers Stadium is located in Los Angeles, not Chicago. You lost 10 gems';
    document.body.style.backgroundImage = "url('images/ferrisandfriends.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.style.display = 'block';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/marshmallow.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'none';
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}
/******************************************************************************************************************************************************************* */
//                                                          /* END OF FERRIS BUELLER ANSWERS */
/********************************************************************************************************************************************************************/
/******************************************************************************************************************************************************************* */
//                                                          /* GHOSTBUSTER ANSWERS */
/********************************************************************************************************************************************************************/
function blueC() {
    question.innerText = "You chose Beetlejuice and even though you do have to call his name to summon him, you have to do it three times. Besides, I don't think we need that hassle " + player + ". You lose 10 gems";
    document.body.style.backgroundImage = "url('images/ghostbuster.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/parentsBack.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'none';
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}

function blueC2() {
    question.innerText = "You chose Ghostbusters and the actual Ghostbusters fight 'The Stay Puft Marshmallow Man' and defeat the paranomarl monster. You gain 30 gems ";
    document.body.style.backgroundImage = "url('images/ghostbuster.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/parentsBack.jpeg')";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'none';
        answerThree.style.display = 'inline';
        answerFour.style.display = 'inline';
    });
}
/******************************************************************************************************************************************************************* */
//                                                          /* END OF GHOSTBUSTER ANSWERS */
/********************************************************************************************************************************************************************/
/******************************************************************************************************************************************************************* */
//                                                          /* BACK TO THE FUTURE ANSWERS ANSWERS */
/********************************************************************************************************************************************************************/
function blueD() {
    question.innerText = "You choose Johnny B Goode and everyone at the dance goes wild. Marty's parent's are extremely happy. You gain 50 gems.";
    document.body.style.backgroundImage = "url('images/michaelJ.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/delorean.jpeg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'block';
        answerThree.style.display = 'none';
        answerFour.style.display = 'none';
        winStatement2();
    });
}

function blueD2() {
    question.innerText = "You choose Back in Time by Huey Lewis and the News. You know that you are in 1955, right? They havent been discovered yet. You lost 10 gems. ";
    document.body.style.backgroundImage = "url('images/michaelJ.jpeg')";
    document.body.style.backgroundSize = "cover";
    answerThree.style.display = 'none';
    answerFour.style.display = 'none';
    nextButton.addEventListener("click", function() {
        addPoints(points.innerText, point);
        document.body.style.backgroundImage = "url('images/delorean.jpeg')";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundSize = "cover";
        nextButton.style.display = 'block';
        answerThree.style.display = 'none';
        answerFour.style.display = 'none';
        winStatement2();
    });
}
/******************************************************************************************************************************************************************* */
//                                                          /* END OF BACK TO FUTURE ANSWERS */
/********************************************************************************************************************************************************************/
/******************************************************************************************************************************************************************* */
//                                                         WIN STATEMENT AND REWARD FOR PHONEBOOTH GAME
/******************************************************************************************************************************************************************* */
function winStatement2() {
    question.innerText = player + ", you finally make it to the Delorean, and you have to have at least 400 gems to buy plutonium to make it back home. Thank you for fixing these scenarios on your journey. Click 'NEXT' to see your points to see if you are able to go home and gain the reward. "
    nextButton.addEventListener("click", function() {
        winBlue();
    });
}
//IF STATEMENT TO DETERMINE IF PLAYER GETS TO GO HOME AND GAIN REWARDS OR LOSE.
//ARRAY OF AWARDS. WILL RANDOMLY BE CHOOSEN.
function winBlue() {
    var delorean = ['PREDICT FUTURE', 'TELEKINESIS', 'ABILITY TO FLY', 'SUPER HUMAN STRENGTH', 'SHAPESHIFTING'];
    var carRewards = delorean[Math.floor(Math.random() * delorean.length)];
    if (point >= 400) {
        question.innerText = "Your score is  " + point + ". Congratulations get have enough gems to buy plutonium and, you recieve the reward: " + carRewards;
        nextButton.addEventListener("click", function() {
            nextButton.innerText = 'START OVER';
            document.body.style.backgroundImage = "url('images/bttF.jpeg')";
            document.body.style.backgroundSize = "cover";
            theEndtwo();
        });

    }
    if (point < 400) {
        console.log(point + "jj");
        question.innerText = player + " I regret to inform you that you on gain " + point + " gems this time. That's not enough to buy plutonium to get back home. You do not recieve the reward and will not be able to go home this time around."
        nextButton.addEventListener("click", function() {
            nextButton.innerText = 'START OVER';
            document.body.style.backgroundImage = "url('images/bttF.jpeg')";
            document.body.style.backgroundSize = "cover";
            theEndtwo();
        });
    }
}
//END STATMENT: THANK YOU FOR PLAYING MY GAME.
function theEndtwo() {
    question.innerText = "Thank you for playing " + player + "! You have reached the end of my first RGP/Trivia Game. Part TWO will be under way soon. Points and rewards start over, once game starts over."
    nextButton.addEventListener("click", function() {
        location.reload();
    });
}
/******************************************************************************************************************************************************************* */
//                                                        // END OF GAME FUNCTIONS FOR DOLEREAN
/******************************************************************************************************************************************************************* */