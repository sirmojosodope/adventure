var timerId;
var timerEL = document.getElementById("time")
const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const questionContainerElement= document.getElementById
('question-container')
const questionElement =document.getElementById('question')
const answerButtonsElemnt =document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    timerId = setInterval(clockTick, 1000)

    timerEL.textContent = time;
    
    startButton.classList.add('hide')
    shuffledQuestions= question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}
function setNextQuestion() {
    resetState()
    showQuestion (shuffledQuestions[currentQuestionIndex])
    
    }

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElemnt.appendChild(button)
    })    

}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElemnt.firstChild) {
    answerButtonsElemnt.removeChild
    (answerButtonsElemnt.firstChild)
    
    }
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElemnt.children).forEach(button => {
    setStatusClass(button,button.dataset.correct)

 })
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
 nextButton.classList.remove('hide')
 } else {
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')
 }
}
function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
      element.classList.add('wrong')  
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
function clockTick() {

    time--;
    timerEL.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}


const question = [
    {
        question: "Commonly used datatypes DO NOT include:",
        answers: [
            {text: 'alerts', correct: true },
            {text: 'booleans', correct: false },
            {text: 'strings', correct: false },
            {text: 'numbers', correct: false }
        ]

    },
    {
        question: "Arrays in JavaScript can be used to store__.",
            answers: [
                {text: 'all the above', correct: true },
                {text: 'booleans', correct: false },
                {text: 'numbers', correct: false },
                {text: 'other arrays', correct: false }
            ]
    
        },
        {
            question: "What is the name for a set of statements that performs a task or calculates a value?",
                answers: [
                    {text: 'function', correct: true },
                    {text: 'console.log', correct: false },
                    {text: 'array', correct: false }, 
                    {text: 'boolean', correct: false }
                ]
        
            },
            
                
 ]