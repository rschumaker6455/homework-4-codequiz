var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var correctAnswer = document.querySelector('.correct')
var wrong = document.querySelector('.wrong')
var done = document.querySelector('.done')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    if (shuffledQuestions.length > currentQuestionIndex +1) {
      nextButton.classList.remove('hide')
    } else {
      done.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        correctAnswer.classList.remove('hide')
    } else {
        wrong.classList.remove('hide')
    }
}

function clearStatusClass() {
    correctAnswer.classList.add('hide')
    wrong.classList.add('hide')
}

var questions = [
    {
      question: 'Commonly used data types DO NOT include:',
      answers: [
          { text: 'strings', correct: false }, 
          { text: 'booleans', correct: false }, 
          { text: 'alerts', correct: true }, 
          { text: 'numbers', correct: false }
        ],
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',
      answers: [
          { text: 'quotes', correct: false },
          { text: 'curly brackets', correct: false},
          { text: 'parentheses', correct: true },
          { text: 'square brackets', correct: false }
      ],
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
          { text: '<script>', correct: true },
          { text: '<js>', correct: false},
          { text: '<scripting>', correct: false },
          { text: '<javascript', correct: false }
      ],
    },
    {
      question: 'Where is the correct place to insert a JavaScript?',
      answers: [
          { text: 'Both the <head> section and the <body> section are correct', correct: true },
          { text: 'The <body> section', correct: false},
          { text: '<The <head> section', correct: false },
          { text: 'In a <div>', correct: false }
      ],
    },
  ];

  localStorage.setItem('questions', JSON.stringify(questions))
