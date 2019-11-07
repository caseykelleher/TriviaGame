var myQuestions = [
	{
		question: "Name the actor who starred as Michael Knight in the “Knight Rider”?",
		answers: {
			a: 'David Hasselhoff',
			b: 'Richard Dean Anderson',
            c: 'Tom Selleck',
            d: 'Don Johnson'
		},
		correctAnswer: 'a'
	},
	{
		question: "Which actress was never nude in the series “Sex And The City”?",
		answers: {
			a: 'Kristin Davis',
			b: 'Cynthia Nixon',
            c: 'Sarah Jessica Parker',
            d: 'Kim Cattrall'
		},
		correctAnswer: 'c'
    },
    {
		question: "How many people Jack Bauer killed in 192 hours?",
		answers: {
			a: '125',
			b: '267',
            c: '275',
            d: '309'
		},
		correctAnswer: 'b'
    },
    {
		question: "In the TV series 'Lost', what is the name of the group that conducted scientific experiments on the island?",
		answers: {
			a: 'Dharma Initiative',
			b: 'Oceanic Six',
            c: 'Ajira',
            d: 'The Others'
		},
		correctAnswer: 'a'
    },
    {
		question: "What is Doug Heffernan's profession on the TV sitcom 'The King of Queens'?",
		answers: {
			a: 'Delivery Driver',
			b: 'Electrician',
            c: 'Plumber',
            d: 'Mailman'
		},
		correctAnswer: 'a'
    },
    {
		question: "Which of the following animated sitcoms was created by Seth MacFarlane?",
		answers: {
			a: 'The Simpsons',
			b: 'American Dad',
            c: 'Futurama',
            d: 'South Park'
		},
		correctAnswer: 'b'
    },
    {
		question: "Airing from 1994 to 2000, in which city was the medical drama TV show ER set?",
		answers: {
			a: 'Dallas',
			b: 'St. Louis',
            c: 'Chicago',
            d: 'Denver'
		},
		correctAnswer: 'c'
    },
    {
		question: "Who plays Nancy Botwin on the comedy-drama TV show 'Weeds'?",
		answers: {
			a: 'Tonye Patano',
			b: 'Allie Grant',
            c: 'Elizabeth Perkins',
            d: 'Mary-Louis Parker'
		},
		correctAnswer: 'd'
    },
    {
		question: "Which character owned the bar on the popular American sitcom 'Cheers'?",
		answers: {
			a: 'Sam Malone',
			b: 'Woody Boyd',
            c: 'Frasier Crane',
            d: 'Cliff Clavin'
		},
		correctAnswer: 'a'
    },
    {
		question: "What was the name of the hangout on the show 'Saved by the Bell'?",
		answers: {
			a: 'The Malibu Latch Club',
			b: 'The Malibu Warf',
            c: 'The Pier',
            d: 'Malibu Sands Beach Club'
		},
		correctAnswer: 'd'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){

	function showMyQuestions(myQuestions, quizContainer); {
		var output = [];
	    var answers;

	// for each question...
	    for(var i=0; i<myQuestions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in myQuestions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ myQuestions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + myQuestions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	    // finally combine our output list into one string of html and put it on the page
	    quizContainer.innerHTML = output.join('');
}
    }

	function showResults(myQuestions, quizContainer, resultsContainer){
		// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<myQuestions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===myQuestions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}
	

	// show the questions
	showQuestions(myQuestions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(myQuestions, quizContainer, resultsContainer);
    }
    
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);