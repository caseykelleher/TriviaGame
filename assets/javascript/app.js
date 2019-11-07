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


var myQuestions = [
	{
		question: "Name the actor who starred as Michael Knight in the “Knight Rider”?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/knightrider.jpeg",
		answers: {
			choiceA: 'David Hasselhoff',
			choiceB: 'Richard Dean Anderson',
            choiceC: 'Tom Selleck',
            choiceD: 'Don Johnson'
		},
		correctAnswer: 'A'
	},
	{
		question: "Which actress was never nude in the series “Sex And The City”?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/sexandthecity.jpeg",
		answers: {
			choiceA: 'Kristin Davis',
			choiceB: 'Cynthia Nixon',
            choiceC: 'Sarah Jessica Parker',
            choiceD: 'Kim Cattrall'
		},
		correctAnswer: 'C'
    },
    {
		question: "How many people Jack Bauer killed in 192 hours?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/jackbauer.jpeg",
		answers: {
			choiceA: '125',
			choiceB: '267',
            choiceC: '275',
            choiceD: '309'
		},
		correctAnswer: 'B'
    },
    {
		question: "In the TV series 'Lost', what is the name of the group that conducted scientific experiments on the island?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/lost.jpeg",
		answers: {
			choiceA: 'Dharma Initiative',
			choiceB: 'Oceanic Six',
            choiceC: 'Ajira',
            choiceD: 'The Others'
		},
		correctAnswer: 'A'
    },
    {
		question: "What is Doug Heffernan's profession on the TV sitcom 'The King of Queens'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/kingofqueens.jpeg",
		answers: {
			choiceA: 'Delivery Driver',
			choiceB: 'Electrician',
            choiceC: 'Plumber',
            choiceD: 'Mailman'
		},
		correctAnswer: 'A'
    },
    {
		question: "Which of the following animated sitcoms was created by Seth MacFarlane?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/seth.jpeg",
		answers: {
			choiceA: 'The Simpsons',
			choiceB: 'American Dad',
            choiceC: 'Futurama',
            choiceD: 'South Park'
		},
		correctAnswer: 'B'
    },
    {
		question: "Airing from 1994 to 2000, in which city was the medical drama TV show ER set?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/ER.jpeg",
		answers: {
			choiceA: 'Dallas',
			choiceB: 'St. Louis',
            choiceC: 'Chicago',
            choiceD: 'Denver'
		},
		correctAnswer: 'C'
    },
    {
		question: "Who plays Nancy Botwin on the comedy-drama TV show 'Weeds'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/weeds.jpeg",
		answers: {
			choiceA: 'Tonye Patano',
			choiceB: 'Allie Grant',
            choiceC: 'Elizabeth Perkins',
            choiceD: 'Mary-Louis Parker'
		},
		correctAnswer: 'D'
    },
    {
		question: "Which character owned the bar on the popular American sitcom 'Cheers'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/cheers.jpeg",
		answers: {
			choiceA: 'Sam Malone',
			choiceB: 'Woody Boyd',
			choiceC: 'Frasier Crane',
            choiceD: 'Cliff Clavin'
		},
		correctAnswer: 'A'
    },
    {
		question: "What was the name of the hangout on the show 'Saved by the Bell'?",
		imgSrc : "/Users/caseykelleher/UCF/TriviaGame/assets/images/savedbythebell.jpeg",
		answers: {
			choiceA: 'The Malibu Latch Club',
			choiceB: 'The Malibu Warf',
            choiceC: 'The Pier',
            choiceD: 'Malibu Sands Beach Club'
		},
		correctAnswer: 'D'
	}
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;


