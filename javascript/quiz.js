var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName('choice-text'));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

//5 QUIZ QUESTIONS
var questions = [
  {
    question: `What is the data type of variables in JavaScript?`,
    choice1: `Object data types`,
    choice2: `Function data type`,
    choice3: `None of the above`,
    choice4: `All of the above`,
    answer: 1,
  },
  {
    question: `The condition in an if / else statement is enclosed within ____.`,
    choice1: `quotes`,
    choice2: `curly brackets`,
    choice3: `parentheses`,
    choice4: `square brackets`,
    answer: 3,
  },
  {
    question: `Arrays in JavaScript can be used to store ____.`,
    choice1: `numbers and strings`,
    choice2: `other arrays`,
    choice3: `booleans`,
    choice4: `all of the above`,

    answer: 4,
  },
  {
    question: `String values must be enclosed within ____ when being assigned to variables.`,
    choice1: `commas`,
    choice2: `curly brackets`,
    choice3: `quotes`,
    choice4: `parentheses`,
    answer: 3,
  },
  {
    question: `A very useful tool used during development and debugging for printing content to the debugger is:`,
    choice1: `JavaScript`,
    choice2: `terminal / bash`,
    choice3: `for loops`,
    choice4: `console.log`,
    answer: 4,
  },
];

var CORRECT_BONES = 10;
var MAX_QUESTIONS = 5;

startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    return window.location.assign(`../html/submit.html`);
  }
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    var number = choice.dataset[`number`];
    choice.innerText = currentQuestion[`choice` + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener(`click`, (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset[`number`];

    var classToApply = 
    selectedAnswer == currentQuestion.answer ? `correct` : `incorrect`;

    selectedChoice.parentElement.classList.add(classToApply)
    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 500)

  });
});

startQuiz();
