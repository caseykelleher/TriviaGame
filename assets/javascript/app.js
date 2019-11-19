const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


var questions = [
	{
		question: "Name the actor who starred as Michael Knight in the “Knight Rider”?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/knightrider.jpeg",
		choiceA: 'David Hasselhoff',
		choiceB: 'Richard Dean Anderson',
        choiceC: 'Tom Selleck',
        choiceD: 'Don Johnson',
		correct: 'A'
	},
	{
		question: "Which actress was never nude in the series “Sex And The City”?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/sexandthecity.jpeg",
		choiceA: 'Kristin Davis',
		choiceB: 'Cynthia Nixon',
		choiceC: 'Sarah Jessica Parker',
		choiceD: 'Kim Cattrall',
		correct: 'C'
    },
    {
		question: "How many people Jack Bauer killed in 192 hours?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/jackbauer.jpeg",
		choiceA: '125',
		choiceB: '267',
        choiceC: '275',
        choiceD: '309',
		correct: 'B'
    },
    {
		question: "In the TV series 'Lost', what is the name of the group that conducted scientific experiments on the island?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/lost.jpeg",
		choiceA: 'Dharma Initiative',
		choiceB: 'Oceanic Six',
        choiceC: 'Ajira',
        choiceD: 'The Others',
		correct: 'A'
    },
    {
		question: "What is Doug Heffernan's profession on the TV sitcom 'The King of Queens'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/kingofqueens.jpeg",
		choiceA: 'Delivery Driver',
		choiceB: 'Electrician',
        choiceC: 'Plumber',
        choiceD: 'Mailman',
		correct: 'A'
    },
    {
		question: "Which of the following animated sitcoms was created by Seth MacFarlane?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/seth.jpeg",
		choiceA: 'The Simpsons',
		choiceB: 'American Dad',
        choiceC: 'Futurama',
        choiceD: 'South Park',
		correct: 'B'
    },
    {
		question: "Airing from 1994 to 2000, in which city was the medical drama TV show ER set?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/ER.jpeg",
		choiceA: 'Dallas',
		choiceB: 'St. Louis',
        choiceC: 'Chicago',
        choiceD: 'Denver',
		correct: 'C'
    },
    {
		question: "Who plays Nancy Botwin on the comedy-drama TV show 'Weeds'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/weeds.jpeg",
		choiceA: 'Tonye Patano',
		choiceB: 'Allie Grant',
        choiceC: 'Elizabeth Perkins',
        choiceD: 'Mary-Louis Parker',
		correct: 'D'
    },
    {
		question: "Which character owned the bar on the popular American sitcom 'Cheers'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/cheers.jpeg",
		choiceA: 'Sam Malone',
		choiceB: 'Woody Boyd',
		choiceC: 'Frasier Crane',
        choiceD: 'Cliff Clavin',
		correct: 'A'
    },
    {
		question: "What was the name of the hangout on the show 'Saved by the Bell'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/savedbythebell.jpeg",
		choiceA: 'The Malibu Latch Club',
		choiceB: 'The Malibu Warf',
        choiceC: 'The Pier',
        choiceD: 'Malibu Sands Beach Club',
		correct: 'D'
	}
];

// variables

const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
var TIMER = 10;
var score = 0;

//how to populate question

function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

//start the quiz

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "/Users/caseykelleher/UCF/TriviaGame/assets/images/5.png" :
              (scorePerCent >= 60) ? "/Users/caseykelleher/UCF/TriviaGame/assets/images/4.png" :
              (scorePerCent >= 40) ? "/Users/caseykelleher/UCF/TriviaGame/assets/images/3.png" :
              (scorePerCent >= 20) ? "/Users/caseykelleher/UCF/TriviaGame/assets/images/2.png" :
              "/Users/caseykelleher/UCF/TriviaGame/assets/images/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}



